// utils/dataFetcher.ts
// Utility to provide data either from direct imports (recommended) or API routes (legacy)

import { coiRecipes, coiBuildings, coiResources } from '../data/coi';
import { Recipe as CoiRecipe, Resource as CoiResource, Building } from '../types';

// This is the Recipe format expected by the RecipeConnectionModal (from pages/api/recipes.ts)
export interface Recipe {
  id: string;
  name: string;
  building: {
    id: string;
    name: string;
    image: string;
  };
  time: number;
  inputs: {
    id: string;
    name: string;
    amount: number;
    icon: string;
  }[];
  outputs: {
    id: string;
    name: string;
    amount: number;
    icon: string;
  }[];
}

// Helper function to find building by ID
const findBuilding = (buildingId: string): Building | undefined => {
  return coiBuildings.find(building => building.id === buildingId);
};

// Helper function to find resource by ID
const findResource = (resourceId: string): CoiResource | undefined => {
  return coiResources.find(resource => resource.id === resourceId);
};

// Helper function to get time from metadata
const getTimeFromMetadata = (metadata: { key: string; value: string }[]): number => {
  const timeMetadata = metadata.find(m => m.key === 'time');
  return timeMetadata ? parseFloat(timeMetadata.value) : 10; // Default to 10 seconds
};

// Convert COI recipe to API Recipe format
const convertRecipe = (coiRecipe: CoiRecipe): Recipe | null => {
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
    inputs: inputs as any[],
    outputs: outputs as any[],
  };
};

export async function fetchResources(): Promise<CoiResource[]> {
  try {
    // Return resources directly from coi data
    return coiResources;
  } catch (error) {
    console.error('Error loading resources:', error);
    // Fallback to empty array
    return [];
  }
}

export async function fetchRecipes(resourceId?: string): Promise<Recipe[]> {
  try {
    // Convert all COI recipes to API format
    const recipes = coiRecipes
      .map(convertRecipe)
      .filter(Boolean) as Recipe[];
      
      // Filter by resource if specified
      if (resourceId) {
      return recipes.filter((recipe: Recipe) =>
        recipe.outputs.some((output) => output.id === resourceId)
        );
      }
      
      return recipes;
  } catch (error) {
    console.error('Error loading recipes:', error);
    // Fallback to empty array
    return [];
  }
}

// For backward compatibility
export const fetchRecipesByResource = (resourceId: string) => fetchRecipes(resourceId); 