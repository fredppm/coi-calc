#!/usr/bin/env node
/**
 * Complete static API generator that properly converts TypeScript data to JSON
 * This reuses the conversion logic from the API routes to ensure consistency
 */

const fs = require('fs');
const path = require('path');

// Import and evaluate TypeScript data
function loadTsData() {
  const dataPath = path.join(__dirname, '../data/coi.ts');
  const dataContent = fs.readFileSync(dataPath, 'utf8');
  
  // Extract the TypeScript arrays using regex
  const resourcesMatch = dataContent.match(/export const coiResources.*?= (\[[\s\S]*?\]);/);
  const recipesMatch = dataContent.match(/export const coiRecipes.*?= (\[[\s\S]*?\]);/);
  const buildingsMatch = dataContent.match(/export const coiBuildings.*?= (\[[\s\S]*?\]);/);
  
  if (!resourcesMatch || !recipesMatch || !buildingsMatch) {
    throw new Error('Could not extract data from coi.ts');
  }
  
  // Convert TypeScript to JSON (simplified)
  function tsToJson(tsString) {
    return JSON.parse(tsString
      .replace(/'/g, '"')  // Single quotes to double quotes
      .replace(/,(\s*[}\]])/g, '$1')  // Remove trailing commas
      .replace(/(\w+):/g, '"$1":'));  // Quote object keys
  }
  
  return {
    resources: tsToJson(resourcesMatch[1]),
    recipes: tsToJson(recipesMatch[1]),
    buildings: tsToJson(buildingsMatch[1])
  };
}

// Convert recipes using the same logic as the API route
function convertRecipes(data) {
  const { recipes, buildings, resources } = data;
  
  // Helper functions (same as API)
  const findBuilding = (buildingId) => buildings.find(b => b.id === buildingId);
  const findResource = (resourceId) => resources.find(r => r.id === resourceId);
  const getTimeFromMetadata = (metadata) => {
    const timeMetadata = metadata.find(m => m.key === 'time');
    return timeMetadata ? parseFloat(timeMetadata.value) : 10;
  };
  
  // Convert recipe (same logic as API)
  const convertRecipe = (coiRecipe) => {
    const building = findBuilding(coiRecipe.buildingId);
    if (!building) return null;

    const inputs = coiRecipe.inputs.map(input => {
      const resource = findResource(input.resourceId);
      if (!resource) return null;
      return {
        id: resource.id,
        name: resource.name,
        amount: input.amount,
        icon: resource.image,
      };
    }).filter(Boolean);

    const outputs = coiRecipe.outputs.map(output => {
      const resource = findResource(output.resourceId);
      if (!resource) return null;
      return {
        id: resource.id,
        name: resource.name,
        amount: output.amount,
        icon: resource.image,
      };
    }).filter(Boolean);

    // Skip recipes with missing resources
    if (inputs.length !== coiRecipe.inputs.length || outputs.length !== coiRecipe.outputs.length) {
      return null;
    }

    return {
      id: coiRecipe.id,
      name: coiRecipe.name,
      building: {
        id: building.id,
        name: building.name,
        image: building.image,
      },
      time: getTimeFromMetadata(coiRecipe.metadata),
      inputs: inputs,
      outputs: outputs,
    };
  };
  
  return recipes.map(convertRecipe).filter(Boolean);
}

// Convert resources using the same logic as the API route
function convertResources(data) {
  const { resources } = data;
  
  // Same filtering as API
  const excludedResources = [
    'air_pollution', 'water_pollution', 'mechanical_power', 'electricity',
    'steam_high', 'steam_low', 'steam_super', 'steam_depleted', 'exhaust',
    'waste_water', 'sour_water', 'toxic_slurry', 'fission_product',
    'spent_fuel', 'spent_mox', 'retired_waste', 'broken_glass',
    'red_mud', 'slag', 'sludge'
  ];

  return resources
    .map(r => ({
      id: r.id,
      name: r.name,
      description: `${r.name} resource for production chains`,
      image: r.image,
      color: r.color
    }))
    .filter(r => !excludedResources.includes(r.id));
}

function main() {
  console.log('🛠️  Complete Static API Generator');
  console.log('='.repeat(50));

  try {
    // Load TypeScript data
    console.log('📖 Loading data from coi.ts...');
    const data = loadTsData();
    console.log(`✅ Loaded ${data.resources.length} resources, ${data.recipes.length} recipes, ${data.buildings.length} buildings`);

    // Create output directory
    const outputDir = path.join(__dirname, '../public/api');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Convert and save resources
    console.log('🔄 Converting resources...');
    const convertedResources = convertResources(data);
    fs.writeFileSync(
      path.join(outputDir, 'resources.json'),
      JSON.stringify(convertedResources, null, 2)
    );
    console.log(`✅ Created resources.json with ${convertedResources.length} resources`);

    // Convert and save recipes
    console.log('🔄 Converting recipes...');
    const convertedRecipes = convertRecipes(data);
    fs.writeFileSync(
      path.join(outputDir, 'recipes.json'),
      JSON.stringify(convertedRecipes, null, 2)
    );
    console.log(`✅ Created recipes.json with ${convertedRecipes.length} recipes`);

    console.log('\n🎉 Static API generation complete!');
    console.log('📁 Files created:');
    console.log('  - public/api/resources.json');
    console.log('  - public/api/recipes.json');
    console.log('\n✅ Modal should now work with static data!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
} 