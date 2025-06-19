#!/usr/bin/env python3
"""
Captain of Industry Wiki Scraper - Simple Version
"""

import asyncio
import aiohttp
import json
import re
import os
from pathlib import Path
from typing import Dict, List, Optional
from bs4 import BeautifulSoup
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class COIWikiScraper:
    def __init__(self):
        self.base_url = "https://wiki.coigame.com"
        self.recipes_url = "https://wiki.coigame.com/index.php?title=Special%3ACargoQuery&tables=RecipesImport&fields=_pageName%3DPage%2CVersion%3DVersion%2CBuilding%3DBuilding%2CBuildingIcon%3DBuildingIcon%2CUnreleased%3DUnreleased%2CRecipeId%3DRecipeId%2CPowerMult%3DPowerMult%2CInput1Icon%3DInput1Icon%2CInput1Name%3DInput1Name%2CInput1Qty%3DInput1Qty%2CInput2Icon%3DInput2Icon%2CInput2Name%3DInput2Name%2CInput2Qty%3DInput2Qty%2CInput3Icon%3DInput3Icon%2CInput3Name%3DInput3Name%2CInput3Qty%3DInput3Qty%2CInput4Icon%3DInput4Icon%2CInput4Name%3DInput4Name%2CInput4Qty%3DInput4Qty%2CInput5Icon%3DInput5Icon%2CInput5Name%3DInput5Name%2CInput5Qty%3DInput5Qty%2CInput6Icon%3DInput6Icon%2CInput6Name%3DInput6Name%2CInput6Qty%3DInput6Qty%2CTime%3DTime%2COutput1Icon%3DOutput1Icon%2COutput1Name%3DOutput1Name%2COutput1Qty%3DOutput1Qty%2COutput2Icon%3DOutput2Icon%2COutput2Name%3DOutput2Name%2COutput2Qty%3DOutput2Qty%2COutput3Icon%3DOutput3Icon%2COutput3Name%3DOutput3Name%2COutput3Qty%3DOutput3Qty%2COutput4Icon%3DOutput4Icon%2COutput4Name%3DOutput4Name%2COutput4Qty%3DOutput4Qty%2COutput5Icon%3DOutput5Icon%2COutput5Name%3DOutput5Name%2COutput5Qty%3DOutput5Qty%2COutput6Icon%3DOutput6Icon%2COutput6Name%3DOutput6Name%2COutput6Qty%3DOutput6Qty&where=&join_on=&group_by=&having=&order_by%5B0%5D=&order_by_options%5B0%5D=ASC&limit=6020&offset=0&format="
        self.session = None
        self.buildings = {}
        self.resources = set()
        
        # Create output directory in current working directory
        self.output_dir = Path.cwd() / "output"
        self.output_dir.mkdir(exist_ok=True)
        print(f"📁 Output directory: {self.output_dir}")

    async def __aenter__(self):
        self.session = aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=30),
            headers={'User-Agent': 'COI Wiki Scraper 1.0'}
        )
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()

    def normalize_name(self, name: str) -> str:
        if not name or name == "0":
            return ""
        normalized = re.sub(r'[^\w\s-]', '', name.strip())
        normalized = re.sub(r'\s+', '_', normalized)
        return normalized.lower()

    async def scrape_all_data(self):
        logger.info("🚀 Starting COI Wiki scraping...")
        
        # Get recipes data
        logger.info("📋 Fetching recipes data...")
        async with self.session.get(self.recipes_url) as response:
            if response.status != 200:
                logger.error(f"❌ Failed to fetch recipes: {response.status}")
                return
            
            html_content = await response.text()
        
        # Parse recipes
        soup = BeautifulSoup(html_content, 'html.parser')
        table = soup.find('table')
        
        if not table:
            logger.error("❌ No table found")
            return
        
        rows = table.find_all('tr')[1:]
        recipes_data = []
        
        for i, row in enumerate(rows[:10]):  # Limit to 10 for testing
            cells = row.find_all('td')
            if len(cells) < 20:
                continue
                
            recipe_data = {
                'building': cells[2].get_text(strip=True),
                'recipeId': cells[5].get_text(strip=True),
                'inputs': [],
                'outputs': []
            }
            
            # Parse inputs
            for j in range(3):  # First 3 inputs
                base_idx = 7 + (j * 3)
                if base_idx + 2 < len(cells):
                    name = cells[base_idx + 1].get_text(strip=True)
                    qty = cells[base_idx + 2].get_text(strip=True)
                    
                    if name and name != "0" and qty and qty != "0":
                        recipe_data['inputs'].append({'name': name, 'quantity': qty})
                        self.resources.add(name)
            
            # Parse outputs
            for j in range(3):  # First 3 outputs
                base_idx = 26 + (j * 3)
                if base_idx + 2 < len(cells):
                    name = cells[base_idx + 1].get_text(strip=True)
                    qty = cells[base_idx + 2].get_text(strip=True)
                    
                    if name and name != "0" and qty and qty != "0":
                        recipe_data['outputs'].append({'name': name, 'quantity': qty})
                        self.resources.add(name)
            
            if recipe_data['building']:
                recipes_data.append(recipe_data)
        
        logger.info(f"✅ Parsed {len(recipes_data)} recipes")
        logger.info(f"✅ Found {len(self.resources)} unique resources")
        
        # Generate simple files
        self.generate_files(recipes_data)
        
        logger.info("🎉 Scraping completed successfully!")

    def generate_files(self, recipes_data):
        logger.info("📝 Generating files...")
        
        # Generate simplified data
        data = {
            'resources': [{'id': self.normalize_name(r), 'name': r} for r in sorted(self.resources)],
            'recipes': recipes_data
        }
        
        # Write JSON file
        json_file = self.output_dir / "coi_data.json"
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        # Write simple TS file
        ts_content = f"""// Generated COI Data
export const coiResources = {json.dumps([{'id': self.normalize_name(r), 'name': r, 'color': '#95A5A6', 'image': f'/images/resources/{self.normalize_name(r)}.png'} for r in sorted(list(self.resources)[:20])], indent=2)};

export const coiRecipes = {json.dumps(recipes_data, indent=2)};
"""
        
        ts_file = self.output_dir / "coi_data.ts"
        with open(ts_file, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        logger.info(f"✅ Files generated: {json_file}, {ts_file}")

async def main():
    print("🤖 COI Wiki Scraper Starting...")
    
    async with COIWikiScraper() as scraper:
        await scraper.scrape_all_data()
    
    print("✨ All done! Check the 'output' folder for results.")

if __name__ == "__main__":
    asyncio.run(main()) 