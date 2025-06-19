#!/usr/bin/env python3
"""
Captain of Industry Wiki Scraper - Final Complete Version
Extracts all recipes, buildings, and metadata from the COI wiki
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
import time

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class COIWikiScraper:
    def __init__(self):
        self.base_url = "https://wiki.coigame.com"
        self.recipes_url = "https://wiki.coigame.com/index.php?title=Special%3ACargoQuery&tables=RecipesImport&fields=_pageName%3DPage%2CVersion%3DVersion%2CBuilding%3DBuilding%2CBuildingIcon%3DBuildingIcon%2CUnreleased%3DUnreleased%2CRecipeId%3DRecipeId%2CPowerMult%3DPowerMult%2CInput1Icon%3DInput1Icon%2CInput1Name%3DInput1Name%2CInput1Qty%3DInput1Qty%2CInput2Icon%3DInput2Icon%2CInput2Name%3DInput2Name%2CInput2Qty%3DInput2Qty%2CInput3Icon%3DInput3Icon%2CInput3Name%3DInput3Name%2CInput3Qty%3DInput3Qty%2CInput4Icon%3DInput4Icon%2CInput4Name%3DInput4Name%2CInput4Qty%3DInput4Qty%2CInput5Icon%3DInput5Icon%2CInput5Name%3DInput5Name%2CInput5Qty%3DInput5Qty%2CInput6Icon%3DInput6Icon%2CInput6Name%3DInput6Name%2CInput6Qty%3DInput6Qty%2CTime%3DTime%2COutput1Icon%3DOutput1Icon%2COutput1Name%3DOutput1Name%2COutput1Qty%3DOutput1Qty%2COutput2Icon%3DOutput2Icon%2COutput2Name%3DOutput2Name%2COutput2Qty%3DOutput2Qty%2COutput3Icon%3DOutput3Icon%2COutput3Name%3DOutput3Name%2COutput3Qty%3DOutput3Qty%2COutput4Icon%3DOutput4Icon%2COutput4Name%3DOutput4Name%2COutput4Qty%3DOutput4Qty%2COutput5Icon%3DOutput5Icon%2COutput5Name%3DOutput5Name%2COutput5Qty%3DOutput5Qty%2COutput6Icon%3DOutput6Icon%2COutput6Name%3DOutput6Name%2COutput6Qty%3DOutput6Qty&where=&join_on=&group_by=&having=&order_by%5B0%5D=&order_by_options%5B0%5D=ASC&limit=6020&offset=0&format="
        self.session = None
        self.buildings = {}
        self.resources = set()
        
        # Create output directory
        self.output_dir = Path.cwd() / "output_complete"
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

    def estimate_resource_color(self, resource_name: str) -> str:
        """Estimate color based on resource type"""
        resource_lower = resource_name.lower()
        
        color_mapping = {
            'water': '#1E90FF',
            'oil': '#000000',
            'coal': '#2F4F4F',
            'iron': '#A19D94',
            'copper': '#B87333',
            'gold': '#FFD700',
            'aluminum': '#C0C0C0',
            'steel': '#708090',
            'glass': '#E0FFFF',
            'acid': '#FFFF00',
            'oxygen': '#ADD8E6',
            'nitrogen': '#95A5A6',
            'steam': '#FF6B6B',
            'electricity': '#DDA0DD'
        }
        
        for keyword, color in color_mapping.items():
            if keyword in resource_lower:
                return color
        
        return '#95A5A6'  # Default gray

    async def scrape_building_metadata(self, building_name: str, semaphore: asyncio.Semaphore) -> Optional[Dict]:
        """Scrape metadata for a specific building"""
        async with semaphore:
            try:
                # Convert building name to wiki URL format
                wiki_name = building_name.replace(" ", "_").replace("(", "%28").replace(")", "%29")
                url = f"{self.base_url}/{wiki_name}"
                
                logger.info(f"🏭 Scraping building: {building_name}")
                
                await asyncio.sleep(0.5)  # Be nice to the server
                
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
                        
                        # Extract image
                        img_element = soup.select_one('.inner-main img')
                        if img_element and img_element.get('src'):
                            building_data['image'] = img_element['src']
                        
                        # Extract metadata from infobox
                        infobox = soup.select_one('.infobox-wrapper .inner-table')
                        if infobox:
                            rows = infobox.find_all('tr')
                            for row in rows:
                                cells = row.find_all(['td', 'th'])
                                if len(cells) >= 2:
                                    key = cells[0].get_text(strip=True).lower()
                                    value = cells[1].get_text(strip=True)
                                    
                                    # Normalize common metadata keys
                                    key_mapping = {
                                        'workers': 'workers',
                                        'electricity': 'electricity',
                                        'maintenance': 'maintenance',
                                        'construction': 'construction',
                                        'footprint': 'footprint',
                                        'research': 'research',
                                        'boost by unity': 'boostByUnity'
                                    }
                                    
                                    normalized_key = key_mapping.get(key, key)
                                    if normalized_key and value:
                                        building_data['metadata'].append({
                                            'key': normalized_key,
                                            'value': value
                                        })
                        
                        return building_data
                        
                    else:
                        logger.warning(f"⚠️ Failed to fetch {building_name}: {response.status}")
                        return None
                        
            except Exception as e:
                logger.error(f"❌ Error scraping {building_name}: {str(e)}")
                return None

    async def scrape_all_data(self):
        logger.info("🚀 Starting COMPLETE COI Wiki scraping...")
        
        # Get recipes data
        logger.info("📋 Fetching recipes data...")
        async with self.session.get(self.recipes_url) as response:
            if response.status != 200:
                logger.error(f"❌ Failed to fetch recipes: {response.status}")
                return
            
            html_content = await response.text()
        
        # Parse ALL recipes
        soup = BeautifulSoup(html_content, 'html.parser')
        table = soup.find('table')
        
        if not table:
            logger.error("❌ No table found")
            return
        
        rows = table.find_all('tr')[1:]
        recipes_data = []
        unique_buildings = set()
        
        for i, row in enumerate(rows):
            if i % 50 == 0:
                logger.info(f"📊 Processing recipe {i+1}/{len(rows)}")
            
            cells = row.find_all('td')
            if len(cells) < 26:
                continue
                
            recipe_data = {
                'building': cells[2].get_text(strip=True),
                'recipeId': cells[5].get_text(strip=True),
                'inputs': [],
                'outputs': [],
                'time': cells[25].get_text(strip=True) if len(cells) > 25 else ""
            }
            
            # Parse ALL inputs (up to 6)
            for j in range(6):
                base_idx = 7 + (j * 3)
                if base_idx + 2 < len(cells):
                    name = cells[base_idx + 1].get_text(strip=True)
                    qty = cells[base_idx + 2].get_text(strip=True)
                    
                    if name and name != "0" and qty and qty != "0":
                        recipe_data['inputs'].append({'name': name, 'quantity': qty})
                        self.resources.add(name)
            
            # Parse ALL outputs (up to 6)
            for j in range(6):
                base_idx = 26 + (j * 3)
                if base_idx + 2 < len(cells):
                    name = cells[base_idx + 1].get_text(strip=True)
                    qty = cells[base_idx + 2].get_text(strip=True)
                    
                    if name and name != "0" and qty and qty != "0":
                        recipe_data['outputs'].append({'name': name, 'quantity': qty})
                        self.resources.add(name)
            
            if recipe_data['building']:
                recipes_data.append(recipe_data)
                unique_buildings.add(recipe_data['building'])
        
        logger.info(f"✅ Parsed {len(recipes_data)} recipes")
        logger.info(f"✅ Found {len(self.resources)} unique resources")
        logger.info(f"✅ Found {len(unique_buildings)} unique buildings")
        
        # Scrape building metadata in parallel
        logger.info("📊 Scraping building metadata...")
        semaphore = asyncio.Semaphore(2)  # Conservative rate limiting
        
        building_tasks = [
            self.scrape_building_metadata(building, semaphore)
            for building in unique_buildings
        ]
        
        building_results = await asyncio.gather(*building_tasks, return_exceptions=True)
        
        # Process building results
        for result in building_results:
            if isinstance(result, dict) and result:
                self.buildings[result['name']] = result
        
        logger.info(f"✅ Successfully scraped {len(self.buildings)} buildings")
        
        # Generate complete files
        self.generate_complete_files(recipes_data)
        
        logger.info("🎉 COMPLETE scraping finished!")

    def generate_complete_files(self, recipes_data):
        logger.info("📝 Generating complete files...")
        
        # Generate complete TypeScript files
        resources_ts = self.generate_resources_ts()
        buildings_ts = self.generate_buildings_ts()
        recipes_ts = self.generate_recipes_ts(recipes_data)
        
        # Main combined file
        main_ts = f"""import {{ Resource, Building, Recipe }} from '../types';

{resources_ts}

{buildings_ts}

{recipes_ts}
"""
        
        # Write all files
        (self.output_dir / "coi_complete.ts").write_text(main_ts, encoding="utf-8")
        (self.output_dir / "resources_complete.ts").write_text(resources_ts, encoding="utf-8")
        (self.output_dir / "buildings_complete.ts").write_text(buildings_ts, encoding="utf-8")
        (self.output_dir / "recipes_complete.ts").write_text(recipes_ts, encoding="utf-8")
        
        # JSON files for analysis
        complete_data = {
            'summary': {
                'total_resources': len(self.resources),
                'total_buildings': len(self.buildings),
                'total_recipes': len(recipes_data)
            },
            'resources': [{'id': self.normalize_name(r), 'name': r} for r in sorted(self.resources)],
            'buildings': list(self.buildings.values()),
            'recipes': recipes_data
        }
        
        (self.output_dir / "coi_complete.json").write_text(
            json.dumps(complete_data, indent=2, ensure_ascii=False), 
            encoding="utf-8"
        )
        
        logger.info(f"✅ Complete files generated in {self.output_dir}")
        logger.info(f"📊 Summary: {len(self.resources)} resources, {len(self.buildings)} buildings, {len(recipes_data)} recipes")

    def generate_resources_ts(self) -> str:
        resources_code = "export const coiResources: Resource[] = [\n"
        
        for resource in sorted(self.resources):
            resource_id = self.normalize_name(resource)
            color = self.estimate_resource_color(resource)
            
            resources_code += f'  {{ id: "{resource_id}", name: "{resource}", color: "{color}", image: "/images/resources/{resource_id}.png" }},\n'
        
        resources_code += "];"
        return resources_code

    def generate_buildings_ts(self) -> str:
        buildings_code = "export const coiBuildings: Building[] = [\n"
        
        for building_data in sorted(self.buildings.values(), key=lambda x: x['name']):
            building_code = f'  {{\n'
            building_code += f'    id: "{building_data["id"]}",\n'
            building_code += f'    name: "{building_data["name"]}",\n'
            building_code += f'    image: "/images/buildings/{building_data["id"]}.png"'
            
            if building_data['metadata']:
                building_code += ',\n    metadata: [\n'
                for meta in building_data['metadata']:
                    building_code += f'      {{ key: "{meta["key"]}", value: "{meta["value"]}" }},\n'
                building_code += '    ]'
            
            building_code += '\n  },\n'
            buildings_code += building_code
        
        buildings_code += "];"
        return buildings_code

    def generate_recipes_ts(self, recipes_data: List[Dict]) -> str:
        recipes_code = "export const coiRecipes: Recipe[] = [\n"
        
        for i, recipe in enumerate(recipes_data):
            building_id = self.normalize_name(recipe['building'])
            recipe_id = f"{building_id}_{i}"
            
            recipe_code = f'  {{\n'
            recipe_code += f'    id: "{recipe_id}",\n'
            recipe_code += f'    name: "{recipe["recipeId"] or recipe_id}",\n'
            recipe_code += f'    buildingId: "{building_id}",\n'
            
            # Inputs
            recipe_code += '    inputs: [\n'
            for inp in recipe['inputs']:
                resource_id = self.normalize_name(inp['name'])
                try:
                    amount = int(inp["quantity"])
                except (ValueError, TypeError):
                    amount = 0
                recipe_code += f'      {{ resourceId: "{resource_id}", amount: {amount} }},\n'
            recipe_code += '    ],\n'
            
            # Outputs
            recipe_code += '    outputs: [\n'
            for out in recipe['outputs']:
                resource_id = self.normalize_name(out['name'])
                try:
                    amount = int(out["quantity"])
                except (ValueError, TypeError):
                    amount = 0
                recipe_code += f'      {{ resourceId: "{resource_id}", amount: {amount} }},\n'
            recipe_code += '    ],\n'
            
            # Metadata
            recipe_code += '    metadata: [\n'
            if recipe['time'] and recipe['time'] != "0":
                recipe_code += f'      {{ key: "time", value: "{recipe["time"]}" }},\n'
            recipe_code += '    ]\n'
            
            recipe_code += '  },\n'
            recipes_code += recipe_code
        
        recipes_code += "];"
        return recipes_code

async def main():
    print("🤖 COI Wiki Scraper - COMPLETE VERSION Starting...")
    print("⚠️  This will take several minutes to complete all buildings...")
    
    start_time = time.time()
    
    async with COIWikiScraper() as scraper:
        await scraper.scrape_all_data()
    
    elapsed = time.time() - start_time
    print(f"✨ All done in {elapsed:.1f} seconds! Check the 'output_complete' folder for results.")

if __name__ == "__main__":
    asyncio.run(main()) 