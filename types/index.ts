/**
 * Represents a resource in the system
 */
export interface Resource {
  id: string;
  name: string;
  color: string;
  image: string;
}

/**
 * Represents a building where recipes can be executed
 */
export interface Building {
  id: string;
  name: string;
  image: string;
  metadata?: MetadataItem[]; // Optional metadata for operational information
}

/**
 * Represents the input or output of a recipe
 */
export interface RecipeItem {
  resourceId: string;
  amount: number;
}

/**
 * Represents a key-value pair for metadata
 */
export interface MetadataItem {
  key: string;
  value: string;
}

/**
 * Represents a recipe that can be executed in a building
 */
export interface Recipe {
  id: string;
  name: string;
  buildingId: string;  // Reference to the building where this recipe can be executed
  inputs: RecipeItem[];
  outputs: RecipeItem[];
  metadata: MetadataItem[];
} 