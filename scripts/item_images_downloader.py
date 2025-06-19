#!/usr/bin/env python3
"""
COI Item Images Downloader
Downloads all 166 item images directly from the wiki category page
"""

import asyncio
import aiohttp
import json
import re
from pathlib import Path
from typing import Dict, List, Set
from bs4 import BeautifulSoup
import logging
from urllib.parse import urljoin

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ItemImagesDownloader:
    def __init__(self):
        self.base_url = "https://wiki.coigame.com"
        self.category_url = "https://wiki.coigame.com/Category:Item_images"
        self.session = None
        self.item_images = {}  # filename -> full_url mapping
        
        # Create output directory
        self.output_dir = Path.cwd() / "item_images_download"
        self.output_dir.mkdir(exist_ok=True)
        (self.output_dir / "images" / "resources").mkdir(parents=True, exist_ok=True)
        
        print(f"📁 Output: {self.output_dir}")

    async def __aenter__(self):
        connector = aiohttp.TCPConnector(limit=15)
        self.session = aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=30),
            connector=connector,
            headers={'User-Agent': 'COI Item Images Downloader 1.0'}
        )
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()

    def normalize_name(self, filename: str) -> str:
        """Convert filename to normalized resource ID"""
        if not filename:
            return ""
        # Remove .png extension and normalize
        name = filename.replace('.png', '')
        return re.sub(r'\s+', '_', re.sub(r'[^\w\s-]', '', name.strip())).lower()

    async def download_image(self, image_url: str, local_path: Path, semaphore: asyncio.Semaphore, filename: str) -> bool:
        """Download a single item image with rate limiting"""
        async with semaphore:
            try:
                # Skip if file already exists
                if local_path.exists():
                    logger.debug(f"⏭️ Image already exists: {filename}")
                    return True
                
                logger.info(f"📥 Downloading: {filename}")
                
                async with self.session.get(image_url) as response:
                    if response.status == 200:
                        content = await response.read()
                        local_path.parent.mkdir(parents=True, exist_ok=True)
                        local_path.write_bytes(content)
                        logger.info(f"✅ Downloaded: {filename}")
                        return True
                    else:
                        logger.warning(f"⚠️ Failed to download {filename}: {response.status}")
                        return False
                        
            except Exception as e:
                logger.error(f"❌ Error downloading {filename}: {e}")
                return False

    async def extract_item_images_from_category(self):
        """Extract all item image URLs from the category page"""
        logger.info("🔍 Fetching item images from category page...")
        
        async with self.session.get(self.category_url) as response:
            if response.status != 200:
                logger.error(f"❌ Failed to fetch category page: {response.status}")
                return
            
            html_content = await response.text()
        
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Find all image links in the category listing
        # The images are listed as links like: "Acid.png128 × 128; 6 KB"
        category_content = soup.find('div', {'class': 'mw-category-generated'})
        if not category_content:
            logger.error("❌ Could not find category content!")
            return
        
        # Find all links that end with .png
        image_links = category_content.find_all('a', href=True)
        
        for link in image_links:
            href = link.get('href', '')
            text = link.get_text(strip=True)
            
            # Check if this is an image file link
            if text.endswith('.png') and 'File:' in href:
                filename = text.split('128')[0].strip()  # Remove size info "128 × 128; 6 KB"
                if filename.endswith('.png'):
                    # Construct direct image URL
                    # Wiki file URLs are typically: /images/thumb/X/XX/filename.png/128px-filename.png
                    # But we want the original: /images/X/XX/filename.png
                    file_page_url = urljoin(self.base_url, href)
                    self.item_images[filename] = file_page_url
                    logger.debug(f"📌 Found: {filename} -> {file_page_url}")
        
        logger.info(f"🎯 Found {len(self.item_images)} item images")

    async def get_direct_image_url(self, file_page_url: str, filename: str) -> str:
        """Get the direct image URL from a file page"""
        try:
            async with self.session.get(file_page_url) as response:
                if response.status == 200:
                    html = await response.text()
                    soup = BeautifulSoup(html, 'html.parser')
                    
                    # Find the direct image link
                    img_link = soup.find('div', class_='fullImageLink')
                    if img_link:
                        a_tag = img_link.find('a')
                        if a_tag and a_tag.get('href'):
                            return urljoin(self.base_url, a_tag['href'])
                    
                    # Alternative: look for the image in file history
                    file_history = soup.find('table', class_='filehistory')
                    if file_history:
                        img = file_history.find('img')
                        if img and img.get('src'):
                            return urljoin(self.base_url, img['src'])
                    
        except Exception as e:
            logger.debug(f"Could not get direct URL for {filename}: {e}")
        
        # Fallback: construct URL pattern
        return f"{self.base_url}/images/{filename[0]}/{filename[0]}{filename[1] if len(filename) > 1 else filename[0]}/{filename}"

    async def download_all_item_images(self):
        """Download all item images in parallel"""
        logger.info(f"🖼️ Starting download of {len(self.item_images)} item images...")
        
        if not self.item_images:
            logger.warning("⚠️ No item images found to download!")
            return 0, 0
        
        # Rate limit image downloads
        image_semaphore = asyncio.Semaphore(10)
        download_tasks = []
        
        # First, get direct image URLs
        logger.info("🔗 Resolving direct image URLs...")
        direct_urls = {}
        
        for filename, file_page_url in self.item_images.items():  # Download all images
            direct_url = await self.get_direct_image_url(file_page_url, filename)
            direct_urls[filename] = direct_url
            logger.info(f"🔗 {filename} -> {direct_url}")
        
        # Now create download tasks
        for filename, direct_url in direct_urls.items():
            if direct_url:
                # Create local path with normalized name
                normalized_name = self.normalize_name(filename)
                local_path = self.output_dir / "images" / "resources" / filename
                
                task = self.download_image(direct_url, local_path, image_semaphore, filename)
                download_tasks.append(task)
        
        logger.info(f"📥 Downloading {len(download_tasks)} item images...")
        
        # Execute all downloads in parallel
        results = await asyncio.gather(*download_tasks, return_exceptions=True)
        
        successful = sum(1 for r in results if r is True)
        failed = len(results) - successful
        
        logger.info(f"✅ Item image downloads complete: {successful} successful, {failed} failed")
        
        return successful, failed

    async def download_items(self):
        logger.info("🚀 Starting item image download from category page...")
        
        # Step 1: Extract image info from category page
        await self.extract_item_images_from_category()
        
        # Step 2: Download all images in parallel
        successful, failed = await self.download_all_item_images()
        
        # Step 3: Generate mapping file
        self.generate_mapping_file(successful, failed)

    def generate_mapping_file(self, successful: int, failed: int):
        """Generate a mapping file with item name -> image path"""
        logger.info("📝 Generating item mapping file...")
        
        # Create TypeScript mapping
        mapping_ts = "export const itemImageMapping: Record<string, string> = {\n"
        for filename in sorted(self.item_images.keys()):
            normalized_name = self.normalize_name(filename)
            item_name = filename.replace('.png', '')
            mapping_ts += f'  "{normalized_name}": "/images/resources/{filename}",\n'
        mapping_ts += "};\n\n"
        
        # Add item list with original names
        mapping_ts += "export const coiItemsWithImages = [\n"
        for filename in sorted(self.item_images.keys()):
            normalized_name = self.normalize_name(filename)
            item_name = filename.replace('.png', '')
            mapping_ts += f'  {{ id: "{normalized_name}", name: "{item_name}", image: "/images/resources/{filename}" }},\n'
        mapping_ts += "];"
        
        # Write mapping file
        (self.output_dir / "item_mapping.ts").write_text(mapping_ts, encoding="utf-8")
        
        # Generate summary
        summary = {
            'total_items_found': len(self.item_images),
            'images_downloaded_successfully': successful,
            'images_failed': failed,
            'success_rate': f"{(successful/(successful+failed)*100):.1f}%" if (successful+failed) > 0 else "0%",
            'items_list': list(self.item_images.keys())
        }
        
        (self.output_dir / "summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
        
        logger.info(f"✅ Files generated in {self.output_dir}")
        logger.info(f"📊 Summary: {summary}")

async def main():
    print("🤖 COI Item Images Downloader Starting...")
    print("📥 Downloading all 166 item images from wiki category!")
    
    async with ItemImagesDownloader() as downloader:
        await downloader.download_items()
    
    print("✨ Complete! Check 'item_images_download' folder for all item images.")

if __name__ == "__main__":
    asyncio.run(main()) 