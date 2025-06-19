#!/usr/bin/env node
/**
 * Generate static JSON files from TypeScript data for GitHub Pages deployment
 * This script extracts data from data/coi.ts and creates static JSON files
 * that can be served directly by GitHub Pages without requiring API routes.
 */

const fs = require('fs');
const path = require('path');

function main() {
  console.log('🛠️  Static API Generator for GitHub Pages');
  console.log('='.repeat(50));

  try {
    // Read the TypeScript data file
    const dataPath = path.join(__dirname, '../data/coi.ts');
    const dataContent = fs.readFileSync(dataPath, 'utf8');

    // Create output directory
    const outputDir = path.join(__dirname, '../public/api');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Extract and process resources
    console.log('🔄 Processing resources...');
    const resourcesMatch = dataContent.match(/export const coiResources.*?= (\[[\s\S]*?\]);/);
    
    if (resourcesMatch) {
      const resourcesJson = convertTsToJson(resourcesMatch[1]);
      
      try {
        const resourcesData = JSON.parse(resourcesJson);
        
        // Apply the same filtering as the API
        const excludedResources = [
          'air_pollution', 'water_pollution', 'mechanical_power', 'electricity',
          'steam_high', 'steam_low', 'steam_super', 'steam_depleted', 'exhaust',
          'waste_water', 'sour_water', 'toxic_slurry', 'fission_product',
          'spent_fuel', 'spent_mox', 'retired_waste', 'broken_glass',
          'red_mud', 'slag', 'sludge'
        ];

        const processedResources = resourcesData
          .map(r => ({
            id: r.id,
            name: r.name,
            description: `${r.name} resource for production chains`,
            image: r.image,
            color: r.color
          }))
          .filter(r => !excludedResources.includes(r.id));

        const resourcesOutput = path.join(outputDir, 'resources.json');
        fs.writeFileSync(resourcesOutput, JSON.stringify(processedResources, null, 2));
        console.log(`✅ Created resources.json with ${processedResources.length} resources`);
      } catch (e) {
        console.error('❌ Error processing resources:', e.message);
      }
    } else {
      console.error('❌ Could not extract resources from coi.ts');
    }

    // Extract and process recipes  
    console.log('🔄 Processing recipes...');
    const recipesMatch = dataContent.match(/export const coiRecipes.*?= (\[[\s\S]*?\]);/);
    
    let processedRecipes = [];
    
    if (recipesMatch) {
      try {
        const recipesJson = convertTsToJson(recipesMatch[1]);
        const recipesData = JSON.parse(recipesJson);
        
        // Process recipes with basic structure
        processedRecipes = recipesData.map(recipe => ({
          id: recipe.id,
          name: recipe.name,
          buildingId: recipe.buildingId,
          inputs: recipe.inputs || [],
          outputs: recipe.outputs || [],
          duration: recipe.duration || 60,
          productsPerSecond: recipe.productsPerSecond || 1
        }));

        console.log(`✅ Processed ${processedRecipes.length} recipes`);
      } catch (e) {
        console.error('❌ Error processing recipes:', e.message);
        processedRecipes = [];
      }
    } else {
      console.error('❌ Could not extract recipes from coi.ts');
    }

    const recipesOutput = path.join(outputDir, 'recipes.json');
    fs.writeFileSync(recipesOutput, JSON.stringify(processedRecipes, null, 2));
    console.log(`✅ Created recipes.json with ${processedRecipes.length} recipes`);

    console.log('\n✅ Static API generation complete!');
    console.log('📁 Files created:');
    console.log(`  - public/api/resources.json`);
    console.log(`  - public/api/recipes.json`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

/**
 * Convert TypeScript object syntax to JSON
 * This is a simplified conversion - for complex cases you'd need a proper TS parser
 */
function convertTsToJson(tsString) {
  return tsString
    .replace(/'/g, '"')  // Single quotes to double quotes
    .replace(/,(\s*[}\]])/g, '$1')  // Remove trailing commas
    .replace(/(\w+):/g, '"$1":');  // Quote object keys
}

if (require.main === module) {
  main();
} 