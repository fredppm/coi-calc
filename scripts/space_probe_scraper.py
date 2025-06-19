#!/usr/bin/env python3
"""
Space Probe Parts Recipe Scraper
Extracts recipe data from the specific Space Probe Parts wiki page
"""

import asyncio
import aiohttp
import json
import re
from pathlib import Path
from bs4 import BeautifulSoup
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class SpaceProbeRecipeScraper:
    def __init__(self):
        self.base_url = "https://wiki.coigame.com"
        self.page_url = "https://wiki.coigame.com/Space_Probe_Parts"
        self.session = None
        
        # Create output directory
        self.output_dir = Path.cwd() / "space_probe_output"
        self.output_dir.mkdir(exist_ok=True)
        
        print(f"📁 Output: {self.output_dir}")

    async def __aenter__(self):
        connector = aiohttp.TCPConnector(limit=5)
        self.session = aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=30),
            connector=connector,
            headers={'User-Agent': 'COI Space Probe Scraper 1.0'}
        )
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()

    def normalize_name(self, name: str) -> str:
        if not name or name == "0":
            return ""
        return re.sub(r'\s+', '_', re.sub(r'[^\w\s-]', '', name.strip())).lower()

    async def scrape_space_probe_page(self):
        """Scrape the Space Probe Parts page to extract recipe information"""
        logger.info("🚀 Fetching Space Probe Parts page...")
        
        try:
            async with self.session.get(self.page_url) as response:
                if response.status != 200:
                    logger.error(f"❌ Failed to fetch page: {response.status}")
                    return None
                
                html_content = await response.text()
                soup = BeautifulSoup(html_content, 'html.parser')
                
                # Extract basic item information
                item_info = {
                    'name': 'Space Probe Parts',
                    'id': 'space_probe_parts',
                    'type': 'Crafted material',
                    'state': 'Unit'
                }
                
                logger.info("📋 Extracting item information...")
                
                # Look for the infobox table
                infobox = soup.find('table', class_='infobox')
                if infobox:
                    rows = infobox.find_all('tr')
                    for row in rows:
                        cells = row.find_all(['td', 'th'])
                        if len(cells) >= 2:
                            key = cells[0].get_text(strip=True).lower()
                            value = cells[1].get_text(strip=True)
                            
                            if 'type' in key:
                                item_info['type'] = value
                            elif 'state' in key:
                                item_info['state'] = value
                            elif 'transported by' in key:
                                item_info['transported_by'] = value
                            elif 'stored in' in key:
                                item_info['stored_in'] = value
                            elif 'created in' in key:
                                item_info['created_in'] = value
                            elif 'used in' in key:
                                item_info['used_in'] = value
                
                # Look for recipe information
                recipes = []
                
                # Find the recipes section
                recipes_section = soup.find('h2', string=re.compile(r'Recipes', re.I))
                if recipes_section:
                    logger.info("🔍 Found Recipes section...")
                    
                    # Look for production subsection
                    production_section = recipes_section.find_next('h3', string=re.compile(r'Production', re.I))
                    if production_section:
                        logger.info("⚙️ Found Production section...")
                        
                        # Look for tables or lists after the production header
                        next_element = production_section.find_next_sibling()
                        
                        # Try to find recipe tables
                        recipe_tables = []
                        current = production_section.find_next()
                        
                        # Search through next elements to find recipe data
                        for i in range(20):  # Look at next 20 elements
                            if current is None:
                                break
                            
                            # Look for tables
                            if current.name == 'table':
                                recipe_tables.append(current)
                                logger.info(f"📊 Found table: {i}")
                            
                            # Look for divs that might contain recipe info
                            elif current.name == 'div' and 'recipe' in str(current).lower():
                                logger.info(f"📋 Found recipe div: {i}")
                                recipe_tables.append(current)
                            
                            # Look for recipe images or icons
                            elif current.name in ['p', 'div'] and current.find('img'):
                                images = current.find_all('img')
                                if len(images) > 1:  # Likely a recipe with multiple items
                                    logger.info(f"🖼️ Found potential recipe with {len(images)} images")
                                    recipe_tables.append(current)
                            
                            current = current.find_next()
                        
                        # Extract recipe data from found elements
                        for idx, table in enumerate(recipe_tables):
                            logger.info(f"🔄 Processing recipe element {idx + 1}")
                            recipe_data = self.extract_recipe_from_element(table, idx)
                            if recipe_data:
                                recipes.append(recipe_data)
                
                # If we didn't find recipes in the structured way, look for any recipe-like patterns
                if not recipes:
                    logger.info("🔍 Searching for recipe patterns in page content...")
                    
                    # Look for any tables that might contain recipe data
                    all_tables = soup.find_all('table')
                    for idx, table in enumerate(all_tables):
                        if 'infobox' not in str(table.get('class', [])).lower():
                            recipe_data = self.extract_recipe_from_element(table, idx)
                            if recipe_data:
                                recipes.append(recipe_data)
                                logger.info(f"✅ Found recipe in table {idx}")
                
                return {
                    'item_info': item_info,
                    'recipes': recipes,
                    'raw_html_snippet': str(soup.find('div', id='mw-content-text'))[:2000] if soup.find('div', id='mw-content-text') else None
                }
                
        except Exception as e:
            logger.error(f"❌ Error scraping page: {e}")
            return None

    def extract_recipe_from_element(self, element, idx):
        """Extract recipe data from a table or div element"""
        try:
            recipe = {
                'id': f'space_probe_parts_recipe_{idx}',
                'name': f'Space Probe Parts Production {idx + 1}',
                'building': 'Unknown',
                'inputs': [],
                'outputs': [],
                'time': None
            }
            
            # Look for images (which represent items)
            images = element.find_all('img')
            
            if images:
                logger.info(f"📷 Found {len(images)} images in recipe element")
                
                for img in images:
                    src = img.get('src', '')
                    alt = img.get('alt', '')
                    title = img.get('title', '')
                    
                    # Try to get item name from image attributes
                    item_name = title or alt or ''
                    if item_name:
                        # Clean up the item name
                        item_name = re.sub(r'\.png.*$', '', item_name)
                        item_name = item_name.strip()
                        
                        if item_name and item_name.lower() != 'space probe parts':
                            # This is likely an input
                            recipe['inputs'].append({
                                'name': item_name,
                                'quantity': 1,  # Default quantity
                                'image_src': src
                            })
                        elif item_name.lower() == 'space probe parts':
                            # This is the output
                            recipe['outputs'].append({
                                'name': 'Space Probe Parts',
                                'quantity': 1,
                                'image_src': src
                            })
            
            # Look for text that might contain quantities
            text_content = element.get_text()
            numbers = re.findall(r'\b\d+\b', text_content)
            
            if numbers:
                logger.info(f"🔢 Found numbers in recipe: {numbers}")
                
                # Try to assign quantities to inputs/outputs
                if len(numbers) >= len(recipe['inputs']) + len(recipe['outputs']):
                    # Assign quantities to inputs first, then outputs
                    num_idx = 0
                    for inp in recipe['inputs']:
                        if num_idx < len(numbers):
                            inp['quantity'] = int(numbers[num_idx])
                            num_idx += 1
                    
                    for out in recipe['outputs']:
                        if num_idx < len(numbers):
                            out['quantity'] = int(numbers[num_idx])
                            num_idx += 1
                        
                        # Look for time (usually last number or number with 's')
                        time_match = re.search(r'(\d+)\s*s(?:ec)?', text_content)
                        if time_match:
                            recipe['time'] = time_match.group(1)
            
            # Only return recipe if it has inputs or outputs
            if recipe['inputs'] or recipe['outputs']:
                return recipe
            
        except Exception as e:
            logger.debug(f"Error extracting recipe from element {idx}: {e}")
        
        return None

    async def run_scraper(self):
        logger.info("🚀 Starting Space Probe Parts scraper...")
        
        data = await self.scrape_space_probe_page()
        
        if data:
            # Save raw data
            (self.output_dir / "space_probe_data.json").write_text(
                json.dumps(data, indent=2, ensure_ascii=False), 
                encoding="utf-8"
            )
            
            # Generate TypeScript format
            self.generate_typescript_output(data)
            
            logger.info(f"✅ Data extracted and saved to {self.output_dir}")
            
            # Print summary
            print("\n" + "="*50)
            print("📊 SPACE PROBE PARTS SUMMARY")
            print("="*50)
            print(f"Name: {data['item_info']['name']}")
            print(f"Type: {data['item_info']['type']}")
            print(f"State: {data['item_info']['state']}")
            print(f"Recipes found: {len(data['recipes'])}")
            
            for idx, recipe in enumerate(data['recipes']):
                print(f"\n🔧 Recipe {idx + 1}:")
                print(f"  Inputs: {len(recipe['inputs'])}")
                for inp in recipe['inputs']:
                    print(f"    - {inp['name']} x{inp['quantity']}")
                print(f"  Outputs: {len(recipe['outputs'])}")
                for out in recipe['outputs']:
                    print(f"    - {out['name']} x{out['quantity']}")
                if recipe['time']:
                    print(f"  Time: {recipe['time']}s")
            print("="*50)
        else:
            logger.error("❌ Failed to extract data")

    def generate_typescript_output(self, data):
        """Generate TypeScript format for the extracted data"""
        
        # Generate resource entry
        resource_ts = f"""
// Space Probe Parts Resource
{{ 
  id: "space_probe_parts", 
  name: "Space Probe Parts", 
  color: "#9B59B6", 
  image: "/images/resources/Space_Probe_Parts.png" 
}},"""

        # Generate recipe entries
        recipes_ts = ""
        
        for idx, recipe in enumerate(data['recipes']):
            recipe_id = f"space_probe_parts_recipe_{idx}"
            
            inputs_ts = ""
            for inp in recipe['inputs']:
                input_id = self.normalize_name(inp['name'])
                inputs_ts += f'      {{ resourceId: "{input_id}", amount: {inp["quantity"]} }},\n'
            
            outputs_ts = ""
            for out in recipe['outputs']:
                output_id = self.normalize_name(out['name'])
                outputs_ts += f'      {{ resourceId: "{output_id}", amount: {out["quantity"]} }},\n'
            
            metadata_ts = ""
            if recipe['time']:
                metadata_ts = f'      {{ key: "time", value: "{recipe["time"]}" }},\n'
            
            recipe_ts = f"""
  {{
    id: "{recipe_id}",
    name: "{recipe['name']}",
    buildingId: "assembly_v",
    inputs: [
{inputs_ts}    ],
    outputs: [
{outputs_ts}    ],
    metadata: [
{metadata_ts}    ]
  }},"""
            
            recipes_ts += recipe_ts
        
        # Write TypeScript file
        typescript_content = f"""// Space Probe Parts - Extracted from wiki
// Generated automatically from {self.page_url}

export const spaceProbePartsResource = {resource_ts}

export const spaceProbePartsRecipes = [{recipes_ts}
];
"""
        
        (self.output_dir / "space_probe_parts.ts").write_text(
            typescript_content, 
            encoding="utf-8"
        )

async def main():
    print("🛰️ Space Probe Parts Recipe Scraper")
    print("📥 Extracting recipe data from wiki page...")
    
    async with SpaceProbeRecipeScraper() as scraper:
        await scraper.run_scraper()
    
    print("✨ Complete! Check 'space_probe_output' folder for results.")

if __name__ == "__main__":
    asyncio.run(main()) 