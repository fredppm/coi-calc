#!/usr/bin/env python3
"""
COI Resource Image Scraper
Specialized script to download ALL resource images from the wiki
"""

import asyncio
import aiohttp
import json
import re
from pathlib import Path
from typing import Dict, List, Optional, Set
from bs4 import BeautifulSoup
import logging
from urllib.parse import urljoin

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ResourceImageScraper:
    def __init__(self):
        self.base_url = "https://wiki.coigame.com"
        self.recipes_url = "https://wiki.coigame.com/index.php?title=Special%3ACargoQuery&tables=RecipesImport&fields=_pageName%3DPage%2CVersion%3DVersion%2CBuilding%3DBuilding%2CBuildingIcon%3DBuildingIcon%2CUnreleased%3DUnreleased%2CRecipeId%3DRecipeId%2CPowerMult%3DPowerMult%2CInput1Icon%3DInput1Icon%2CInput1Name%3DInput1Name%2CInput1Qty%3DInput1Qty%2CInput2Icon%3DInput2Icon%2CInput2Name%3DInput2Name%2CInput2Qty%3DInput2Qty%2CInput3Icon%3DInput3Icon%2CInput3Name%3DInput3Name%2CInput3Qty%3DInput3Qty%2CInput4Icon%3DInput4Icon%2CInput4Name%3DInput4Name%2CInput4Qty%3DInput4Qty%2CInput5Icon%3DInput5Icon%2CInput5Name%3DInput5Name%2CInput5Qty%3DInput5Qty%2CInput6Icon%3DInput6Icon%2CInput6Name%3DInput6Name%2CInput6Qty%3DInput6Qty%2CTime%3DTime%2COutput1Icon%3DOutput1Icon%2COutput1Name%3DOutput1Name%2COutput1Qty%3DOutput1Qty%2COutput2Icon%3DOutput2Icon%2COutput2Name%3DOutput2Name%2COutput2Qty%3DOutput2Qty%2COutput3Icon%3DOutput3Icon%2COutput3Name%3DOutput3Name%2COutput3Qty%3DOutput3Qty%2COutput4Icon%3DOutput4Icon%2COutput4Name%3DOutput4Name%2COutput4Qty%3DOutput4Qty%2COutput5Icon%3DInput5Icon%2COutput5Name%3DOutput5Name%2COutput5Qty%3DOutput5Qty%2COutput6Icon%3DOutput6Icon%2COutput6Name%3DOutput6Name%2COutput6Qty%3DOutput6Qty&where=&join_on=&group_by=&having=&order_by%5B0%5D=&order_by_options%5B0%5D=ASC&limit=6020&offset=0&format="
        self.session = None
        self.resource_images = {}  # name -> image_url mapping
        self.resources = set()
        
        # Create output directory
        self.output_dir = Path.cwd() / "resource_images_output"
        self.output_dir.mkdir(exist_ok=True)
        (self.output_dir / "images" / "resources").mkdir(parents=True, exist_ok=True)
        
        print(f"📁 Output: {self.output_dir}")

    async def __aenter__(self):
        connector = aiohttp.TCPConnector(limit=10)
        self.session = aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=30),
            connector=connector,
            headers={'User-Agent': 'COI Resource Image Scraper 1.0'}
        )
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()

    def normalize_name(self, name: str) -> str:
        if not name or name == "0":
            return ""
        return re.sub(r'\s+', '_', re.sub(r'[^\w\s-]', '', name.strip())).lower()

    async def download_image(self, url: str, local_path: Path, semaphore: asyncio.Semaphore, resource_name: str) -> bool:
        """Download a single resource image with rate limiting"""
        async with semaphore:
            try:
                if not url.startswith('http'):
                    url = urljoin(self.base_url, url)
                
                # Skip if file already exists
                if local_path.exists():
                    logger.debug(f"⏭️ Image already exists: {resource_name}")
                    return True
                
                logger.info(f"📥 Downloading {resource_name}: {local_path.name}")
                
                async with self.session.get(url) as response:
                    if response.status == 200:
                        content = await response.read()
                        local_path.parent.mkdir(parents=True, exist_ok=True)
                        local_path.write_bytes(content)
                        logger.info(f"✅ Downloaded: {resource_name}")
                        return True
                    else:
                        logger.warning(f"⚠️ Failed to download {resource_name} from {url}: {response.status}")
                        return False
                        
            except Exception as e:
                logger.error(f"❌ Error downloading {resource_name} from {url}: {e}")
                return False

    def extract_resource_images_from_recipes(self, html_content: str):
        """Extract ALL resource image URLs from the recipes table"""
        logger.info("🔍 Extracting resource images from recipes table...")
        
        soup = BeautifulSoup(html_content, 'html.parser')
        table = soup.find('table')
        if not table:
            logger.error("❌ No table found in recipes page!")
            return
        
        rows = table.find_all('tr')[1:]  # Skip header
        logger.info(f"📊 Processing {len(rows)} recipe rows...")
        
        for i, row in enumerate(rows):
            if i % 100 == 0:
                logger.info(f"🔄 Processing row {i+1}/{len(rows)}")
            
            cells = row.find_all('td')
            if len(cells) < 44:  # Need enough cells for all inputs and outputs
                continue
            
            # Process inputs (6 possible inputs)
            for j in range(6):
                # Input icon is at positions: 7, 10, 13, 16, 19, 22
                icon_idx = 7 + (j * 3)
                name_idx = icon_idx + 1
                
                if icon_idx < len(cells) and name_idx < len(cells):
                    icon_cell = cells[icon_idx]
                    name_cell = cells[name_idx]
                    
                    resource_name = name_cell.get_text(strip=True)
                    if resource_name and resource_name != "0":
                        # Find image in icon cell
                        img = icon_cell.find('img')
                        if img and img.get('src'):
                            image_url = img['src']
                            self.resource_images[resource_name] = image_url
                            self.resources.add(resource_name)
                            logger.debug(f"📌 Input: {resource_name} -> {image_url}")
            
            # Process outputs (6 possible outputs)
            for j in range(6):
                # Output icon is at positions: 26, 29, 32, 35, 38, 41
                icon_idx = 26 + (j * 3)
                name_idx = icon_idx + 1
                
                if icon_idx < len(cells) and name_idx < len(cells):
                    icon_cell = cells[icon_idx]
                    name_cell = cells[name_idx]
                    
                    resource_name = name_cell.get_text(strip=True)
                    if resource_name and resource_name != "0":
                        # Find image in icon cell
                        img = icon_cell.find('img')
                        if img and img.get('src'):
                            image_url = img['src']
                            self.resource_images[resource_name] = image_url
                            self.resources.add(resource_name)
                            logger.debug(f"📌 Output: {resource_name} -> {image_url}")

    async def download_all_resource_images(self):
        """Download all collected resource images in parallel"""
        logger.info(f"🖼️ Starting download of {len(self.resource_images)} resource images...")
        
        if not self.resource_images:
            logger.warning("⚠️ No resource images found to download!")
            return
        
        # Rate limit image downloads
        image_semaphore = asyncio.Semaphore(8)
        download_tasks = []
        
        for resource_name, image_url in self.resource_images.items():
            if image_url:
                # Create normalized filename
                normalized_name = self.normalize_name(resource_name)
                
                # Extract file extension from URL
                original_filename = Path(image_url).name
                if '.' in original_filename:
                    extension = original_filename.split('.')[-1]
                else:
                    extension = 'png'
                
                filename = f"{normalized_name}.{extension}"
                local_path = self.output_dir / "images" / "resources" / filename
                
                task = self.download_image(image_url, local_path, image_semaphore, resource_name)
                download_tasks.append(task)
        
        logger.info(f"📥 Downloading {len(download_tasks)} resource images...")
        
        # Execute all downloads in parallel
        results = await asyncio.gather(*download_tasks, return_exceptions=True)
        
        successful = sum(1 for r in results if r is True)
        failed = len(results) - successful
        
        logger.info(f"✅ Resource image downloads complete: {successful} successful, {failed} failed")
        
        return successful, failed

    async def scrape_resource_images(self):
        logger.info("🚀 Starting resource image collection...")
        
        # Step 1: Get recipes data
        logger.info("📋 Fetching recipes data...")
        async with self.session.get(self.recipes_url) as response:
            if response.status != 200:
                logger.error(f"❌ Failed to fetch recipes: {response.status}")
                return
            html_content = await response.text()
        
        # Step 2: Extract resource images from recipes table
        self.extract_resource_images_from_recipes(html_content)
        logger.info(f"🎯 Found {len(self.resource_images)} unique resources with images")
        
        # Debug: Show some examples
        for i, (name, url) in enumerate(list(self.resource_images.items())[:10]):
            logger.info(f"🔍 Example {i+1}: {name} -> {url}")
        
        # Step 3: Download all images in parallel
        successful, failed = await self.download_all_resource_images()
        
        # Step 4: Generate mapping file
        self.generate_mapping_file(successful, failed)

    def generate_mapping_file(self, successful: int, failed: int):
        """Generate a mapping file with resource name -> image path"""
        logger.info("📝 Generating resource mapping file...")
        
        # Create TypeScript mapping
        mapping_ts = "export const resourceImageMapping: Record<string, string> = {\n"
        for resource_name in sorted(self.resources):
            normalized_name = self.normalize_name(resource_name)
            mapping_ts += f'  "{normalized_name}": "/images/resources/{normalized_name}.png",\n'
        mapping_ts += "};\n\n"
        
        # Add resource list
        mapping_ts += "export const coiResourcesWithImages: Resource[] = [\n"
        for resource_name in sorted(self.resources):
            normalized_name = self.normalize_name(resource_name)
            mapping_ts += f'  {{ id: "{normalized_name}", name: "{resource_name}", color: "#95A5A6", image: "/images/resources/{normalized_name}.png" }},\n'
        mapping_ts += "];"
        
        # Write mapping file
        (self.output_dir / "resource_mapping.ts").write_text(mapping_ts, encoding="utf-8")
        
        # Generate summary
        summary = {
            'total_resources_found': len(self.resources),
            'total_images_found': len(self.resource_images),
            'images_downloaded_successfully': successful,
            'images_failed': failed,
            'success_rate': f"{(successful/(successful+failed)*100):.1f}%" if (successful+failed) > 0 else "0%"
        }
        
        (self.output_dir / "summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
        
        logger.info(f"✅ Files generated in {self.output_dir}")
        logger.info(f"📊 Summary: {summary}")

async def main():
    print("🤖 COI Resource Image Scraper Starting...")
    print("📥 This will find and download ALL resource images from the wiki!")
    
    async with ResourceImageScraper() as scraper:
        await scraper.scrape_resource_images()
    
    print("✨ Complete! Check 'resource_images_output' folder for images and mapping.")

if __name__ == "__main__":
    asyncio.run(main()) 