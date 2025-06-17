import type { NextApiRequest, NextApiResponse } from 'next';
import { coiRecipes, coiBuildings, coiResources } from '../../data/coi';
import { Recipe as CoiRecipe, Building, Resource } from '../../types';

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
const findResource = (resourceId: string): Resource | undefined => {
  return coiResources.find(resource => resource.id === resourceId);
};

// Helper function to get time from metadata
const getTimeFromMetadata = (metadata: { key: string; value: string }[]): number => {
  const timeMetadata = metadata.find(m => m.key === 'time');
  return timeMetadata ? parseFloat(timeMetadata.value) : 10; // Default to 10 seconds
};

// Convert COI recipe to our Recipe format
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

export default function handler(req: NextApiRequest, res: NextApiResponse<Recipe[]>) {
  if (req.method === 'GET') {
    const { resource, produces } = req.query;
    
    // Convert all COI recipes to our format
    const recipes = coiRecipes
      .map(convertRecipe)
      .filter(Boolean) as Recipe[];
    
    // Support both 'resource' and 'produces' parameters for backward compatibility
    const resourceFilter = resource || produces;
    
    if (resourceFilter) {
      // Filter recipes that produce the specified resource
      const filteredRecipes = recipes.filter(recipe =>
        recipe.outputs.some(output => output.id === resourceFilter)
      );
      res.status(200).json(filteredRecipes);
    } else {
      res.status(200).json(recipes);
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 