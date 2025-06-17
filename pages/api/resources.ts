import type { NextApiRequest, NextApiResponse } from 'next';
import { coiResources } from '../../data/coi';
import { Resource as CoiResource } from '../../types';

export interface Resource {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

// Convert COI resource to our Resource format
const convertResource = (coiResource: CoiResource): Resource => {
  return {
    id: coiResource.id,
    name: coiResource.name,
    description: `${coiResource.name} resource for production chains`,
    image: coiResource.image,
    color: coiResource.color,
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Resource[]>) {
  if (req.method === 'GET') {
    // Convert all COI resources to our format
    const resources = coiResources.map(convertResource);
    
    // Filter out some resources that might not be good objectives
    // (like pollution, mechanical power, etc.)
    const validObjectives = resources.filter(resource => {
      const excludedResources = [
        'air_pollution',
        'water_pollution',
        'mechanical_power',
        'electricity',
        'steam_high',
        'steam_low',
        'steam_super',
        'steam_depleted',
        'exhaust',
        'waste_water',
        'sour_water',
        'toxic_slurry',
        'fission_product',
        'spent_fuel',
        'spent_mox',
        'retired_waste',
        'broken_glass',
        'red_mud',
        'slag',
        'sludge',
      ];
      
      return !excludedResources.includes(resource.id);
    });

    res.status(200).json(validObjectives);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 