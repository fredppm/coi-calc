#!/usr/bin/env python3
"""
COI Wiki Scraper with Parallel Image Downloads
Extracts all data AND downloads images from the wiki
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

class COIWikiScraperWithImages:
    def __init__(self):
        self.base_url = "https://wiki.coigame.com"
        self.recipes_url = "https://wiki.coigame.com/index.php?title=Special%3ACargoQuery&tables=RecipesImport&fields=_pageName%3DPage%2CVersion%3DVersion%2CBuilding%3DBuilding%2CBuildingIcon%3DBuildingIcon%2CUnreleased%3DUnreleased%2CRecipeId%3DRecipeId%2CPowerMult%3DPowerMult%2CInput1Icon%3DInput1Icon%2CInput1Name%3DInput1Name%2CInput1Qty%3DInput1Qty%2CInput2Icon%3DInput2Icon%2CInput2Name%3DInput2Name%2CInput2Qty%3DInput2Qty%2CInput3Icon%3DInput3Icon%2CInput3Name%3DInput3Name%2CInput3Qty%3DInput3Qty%2CInput4Icon%3DInput4Icon%2CInput4Name%3DInput4Name%2CInput4Qty%3DInput4Qty%2CInput5Icon%3DInput5Icon%2CInput5Name%3DInput5Name%2CInput5Qty%3DInput5Qty%2CInput6Icon%3DInput6Icon%2CInput6Name%3DInput6Name%2CInput6Qty%3DInput6Qty%2CTime%3DTime%2COutput1Icon%3DOutput1Icon%2COutput1Name%3DOutput1Name%2COutput1Qty%3DOutput1Qty%2COutput2Icon%3DOutput2Icon%2COutput2Name%3DOutput2Name%2COutput2Qty%3DOutput2Qty%2COutput3Icon%3DOutput3Icon%2COutput3Name%3DOutput3Name%2COutput3Qty%3DOutput3Qty%2COutput4Icon%3DOutput4Icon%2COutput4Name%3DOutput4Name%2COutput4Qty%3DOutput4Qty%2COutput5Icon%3DOutput5Icon%2COutput5Name%3DOutput5Name%2COutput5Qty%3DOutput5Qty%2COutput6Icon%3DOutput6Icon%2COutput6Name%3DOutput6Name%2COutput6Qty%3DOutput6Qty&where=&join_on=&group_by=&having=&order_by%5B0%5D=&order_by_options%5B0%5D=ASC&limit=6020&offset=0&format="
        self.session = None
        self.buildings = {}
        self.resources = set()
        self.building_images = set()
        self.resource_images = set()
        
        # Create output directories
        self.output_dir = Path.cwd() / "output_with_images"
        self.output_dir.mkdir(exist_ok=True)
        (self.output_dir / "images" / "buildings").mkdir(parents=True, exist_ok=True)
        (self.output_dir / "images" / "resources").mkdir(parents=True, exist_ok=True)
        
        print(f"📁 Output: {self.output_dir}")

    async def __aenter__(self):
        connector = aiohttp.TCPConnector(limit=10)
        self.session = aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=30),
            connector=connector,
            headers={'User-Agent': 'COI Wiki Scraper 1.0'}
        )
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()

    def normalize_name(self, name: str) -> str:
        if not name or name == "0":
            return ""
        return re.sub(r'\s+', '_', re.sub(r'[^\w\s-]', '', name.strip())).lower()

    async def download_image(self, url: str, local_path: Path, semaphore: asyncio.Semaphore) -> bool:
        """Download a single image with rate limiting"""
        async with semaphore:
            try:
                if not url.startswith('http'):
                    url = urljoin(self.base_url, url)
                
                # Skip if file already exists
                if local_path.exists():
                    logger.debug(f"⏭️ Image already exists: {local_path.name}")
                    return True
                
                logger.info(f"📥 Downloading: {local_path.name}")
                
                async with self.session.get(url) as response:
                    if response.status == 200:
                        content = await response.read()
                        local_path.parent.mkdir(parents=True, exist_ok=True)
                        local_path.write_bytes(content)
                        logger.info(f"✅ Downloaded: {local_path.name}")
                        return True
                    else:
                        logger.warning(f"⚠️ Failed to download {url}: {response.status}")
                        return False
                        
            except Exception as e:
                logger.error(f"❌ Error downloading {url}: {e}")
                return False

    async def scrape_building(self, building_name: str, semaphore: asyncio.Semaphore) -> Optional[Dict]:
        """Scrape building data and collect image URLs"""
        async with semaphore:
            try:
                wiki_name = building_name.replace(" ", "_").replace("(", "%28").replace(")", "%29")
                url = f"{self.base_url}/{wiki_name}"
                
                logger.info(f"🏭 {building_name}")
                await asyncio.sleep(0.2)  # Rate limiting
                
                async with self.session.get(url) as response:
                    if response.status == 200:
                        html = await response.text()
                        soup = BeautifulSoup(html, 'html.parser')
                        
                        building_data = {
                            'id': self.normalize_name(building_name),
                            'name': building_name,
                            'image': '',
                            'metadata': []
                        }
                        
                        # Extract and collect image URL
                        img = soup.select_one('.inner-main img')
                        if img and img.get('src'):
                            image_url = img['src']
                            building_data['image'] = image_url
                            self.building_images.add(image_url)
                        
                        # Extract metadata
                        infobox = soup.select_one('.infobox-wrapper .inner-table')
                        if infobox:
                            for row in infobox.find_all('tr'):
                                cells = row.find_all(['td', 'th'])
                                if len(cells) >= 2:
                                    key = cells[0].get_text(strip=True).lower()
                                    value = cells[1].get_text(strip=True)
                                    
                                    key_map = {
                                        'workers': 'workers',
                                        'electricity': 'electricity', 
                                        'maintenance': 'maintenance',
                                        'construction': 'construction',
                                        'footprint': 'footprint',
                                        'research': 'research',
                                        'boost by unity': 'boostByUnity'
                                    }
                                    
                                    if key in key_map and value:
                                        building_data['metadata'].append({
                                            'key': key_map[key],
                                            'value': value
                                        })
                        
                        return building_data
                        
            except Exception as e:
                logger.error(f"❌ {building_name}: {e}")
            return None

    def collect_resource_images_from_recipes(self, html_content: str):
        """Extract resource image URLs from the recipes table"""
        soup = BeautifulSoup(html_content, 'html.parser')
        rows = soup.find('table').find_all('tr')[1:]
        
        for row in rows[:50]:  # Sample first 50 for image collection
            cells = row.find_all('td')
            if len(cells) < 26:
                continue
            
            # Check input and output icons
            for j in range(6):
                # Input icons
                input_idx = 7 + (j * 3)
                if input_idx < len(cells):
                    icon_cell = cells[input_idx]
                    img = icon_cell.find('img')
                    if img and img.get('src'):
                        self.resource_images.add(img['src'])
                
                # Output icons  
                output_idx = 26 + (j * 3)
                if output_idx < len(cells):
                    icon_cell = cells[output_idx]
                    img = icon_cell.find('img')
                    if img and img.get('src'):
                        self.resource_images.add(img['src'])

    async def download_all_images(self):
        """Download all collected images in parallel"""
        logger.info("🖼️ Starting parallel image downloads...")
        
        # Rate limit image downloads
        image_semaphore = asyncio.Semaphore(5)
        download_tasks = []
        
        # Download building images
        for image_url in self.building_images:
            if image_url:
                # Extract filename from URL
                filename = Path(image_url).name
                if not filename:
                    filename = f"building_{hash(image_url)}.png"
                
                local_path = self.output_dir / "images" / "buildings" / filename
                task = self.download_image(image_url, local_path, image_semaphore)
                download_tasks.append(task)
        
        # Download resource images
        for image_url in self.resource_images:
            if image_url:
                filename = Path(image_url).name
                if not filename:
                    filename = f"resource_{hash(image_url)}.png"
                
                local_path = self.output_dir / "images" / "resources" / filename
                task = self.download_image(image_url, local_path, image_semaphore)
                download_tasks.append(task)
        
        logger.info(f"📥 Downloading {len(download_tasks)} images...")
        
        # Execute all downloads in parallel
        results = await asyncio.gather(*download_tasks, return_exceptions=True)
        
        successful = sum(1 for r in results if r is True)
        failed = len(results) - successful
        
        logger.info(f"✅ Image downloads complete: {successful} successful, {failed} failed")

    async def scrape_all_data(self):
        logger.info("🚀 Starting complete scrape with image downloads...")
        
        # Step 1: Get recipes and collect resource images
        logger.info("📋 Fetching recipes data...")
        async with self.session.get(self.recipes_url) as response:
            html_content = await response.text()
        
        # Collect resource images from recipes table
        self.collect_resource_images_from_recipes(html_content)
        logger.info(f"🖼️ Found {len(self.resource_images)} resource images")
        
        # Step 2: Parse recipes  
        soup = BeautifulSoup(html_content, 'html.parser')
        rows = soup.find('table').find_all('tr')[1:]
        
        recipes_data = []
        unique_buildings = set()
        
        for i, row in enumerate(rows):
            if i % 100 == 0:
                logger.info(f"📊 Recipe {i+1}/{len(rows)}")
            
            cells = row.find_all('td')
            if len(cells) < 26:
                continue
                
            recipe = {
                'building': cells[2].get_text(strip=True),
                'recipeId': cells[5].get_text(strip=True),
                'inputs': [],
                'outputs': [],
                'time': cells[25].get_text(strip=True)
            }
            
            # Parse inputs
            for j in range(6):
                idx = 7 + (j * 3)
                if idx + 2 < len(cells):
                    name = cells[idx + 1].get_text(strip=True)
                    qty = cells[idx + 2].get_text(strip=True)
                    if name and name != "0" and qty and qty != "0":
                        recipe['inputs'].append({'name': name, 'quantity': qty})
                        self.resources.add(name)
            
            # Parse outputs
            for j in range(6):
                idx = 26 + (j * 3)
                if idx + 2 < len(cells):
                    name = cells[idx + 1].get_text(strip=True)
                    qty = cells[idx + 2].get_text(strip=True)
                    if name and name != "0" and qty and qty != "0":
                        recipe['outputs'].append({'name': name, 'quantity': qty})
                        self.resources.add(name)
            
            if recipe['building']:
                recipes_data.append(recipe)
                unique_buildings.add(recipe['building'])
        
        logger.info(f"✅ {len(recipes_data)} recipes, {len(self.resources)} resources, {len(unique_buildings)} buildings")
        
        # Step 3: Scrape buildings in parallel
        building_semaphore = asyncio.Semaphore(3)
        building_tasks = [self.scrape_building(b, building_semaphore) for b in unique_buildings]
        building_results = await asyncio.gather(*building_tasks)
        
        for result in building_results:
            if result:
                self.buildings[result['name']] = result
        
        logger.info(f"✅ {len(self.buildings)} buildings scraped")
        logger.info(f"🖼️ Found {len(self.building_images)} building images")
        
        # Step 4: Download all images in parallel
        await self.download_all_images()
        
        # Step 5: Generate files
        self.generate_files(recipes_data)

    def generate_files(self, recipes_data):
        logger.info("📝 Generating files...")
        
        # Resources TS
        resources_ts = "export const coiResources: Resource[] = [\n"
        for resource in sorted(self.resources):
            rid = self.normalize_name(resource)
            resources_ts += f'  {{ id: "{rid}", name: "{resource}", color: "#95A5A6", image: "/images/resources/{rid}.png" }},\n'
        resources_ts += "];"
        
        # Buildings TS  
        buildings_ts = "export const coiBuildings: Building[] = [\n"
        for building in sorted(self.buildings.values(), key=lambda x: x['name']):
            buildings_ts += f'  {{\n    id: "{building["id"]}",\n    name: "{building["name"]}",\n    image: "/images/buildings/{building["id"]}.png"'
            if building['metadata']:
                buildings_ts += ',\n    metadata: [\n'
                for meta in building['metadata']:
                    buildings_ts += f'      {{ key: "{meta["key"]}", value: "{meta["value"]}" }},\n'
                buildings_ts += '    ]'
            buildings_ts += '\n  },\n'
        buildings_ts += "];"
        
        # Recipes TS
        recipes_ts = "export const coiRecipes: Recipe[] = [\n"
        for i, recipe in enumerate(recipes_data):
            bid = self.normalize_name(recipe['building'])
            rid = f"{bid}_{i}"
            
            recipes_ts += f'  {{\n    id: "{rid}",\n    name: "{recipe["recipeId"] or rid}",\n    buildingId: "{bid}",\n'
            recipes_ts += '    inputs: [\n'
            for inp in recipe['inputs']:
                res_id = self.normalize_name(inp['name'])
                try:
                    amount = int(inp["quantity"])
                except:
                    amount = 0
                recipes_ts += f'      {{ resourceId: "{res_id}", amount: {amount} }},\n'
            recipes_ts += '    ],\n    outputs: [\n'
            for out in recipe['outputs']:
                res_id = self.normalize_name(out['name'])
                try:
                    amount = int(out["quantity"])
                except:
                    amount = 0
                recipes_ts += f'      {{ resourceId: "{res_id}", amount: {amount} }},\n'
            recipes_ts += '    ],\n    metadata: [\n'
            if recipe['time'] and recipe['time'] != "0":
                recipes_ts += f'      {{ key: "time", value: "{recipe["time"]}" }},\n'
            recipes_ts += '    ]\n  },\n'
        recipes_ts += "];"
        
        # Write files
        main_ts = f'''import {{ Resource, Building, Recipe }} from '../types';

{resources_ts}

{buildings_ts}

{recipes_ts}
'''
        
        (self.output_dir / "coi_complete.ts").write_text(main_ts, encoding="utf-8")
        (self.output_dir / "resources.ts").write_text(resources_ts, encoding="utf-8")
        (self.output_dir / "buildings.ts").write_text(buildings_ts, encoding="utf-8")
        (self.output_dir / "recipes.ts").write_text(recipes_ts, encoding="utf-8")
        
        # Summary with image info
        summary = {
            'total_resources': len(self.resources),
            'total_buildings': len(self.buildings),
            'total_recipes': len(recipes_data),
            'building_images_found': len(self.building_images),
            'resource_images_found': len(self.resource_images),
            'total_images': len(self.building_images) + len(self.resource_images)
        }
        
        (self.output_dir / "summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
        
        logger.info(f"✅ All files generated in {self.output_dir}")
        logger.info(f"📊 Summary: {summary}")

async def main():
    print("🤖 COI Scraper with Parallel Image Downloads Starting...")
    print("📥 This will download all building and resource images!")
    
    async with COIWikiScraperWithImages() as scraper:
        await scraper.scrape_all_data()
    
    print("✨ Complete! Check 'output_with_images' folder for data AND images.")

if __name__ == "__main__":
    asyncio.run(main())