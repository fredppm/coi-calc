// utils/dataFetcher.ts
// Utility to fetch data from either API routes (dev) or static JSON (production/GitHub Pages)

const isStaticExport = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export async function fetchResources() {
  try {
    if (isStaticExport) {
      // In production with static export, load from static JSON
      const response = await fetch(`${basePath}/api/resources.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch resources: ${response.statusText}`);
      }
      return response.json();
    } else {
      // In development or regular production, use API route
      const response = await fetch('/api/resources');
      if (!response.ok) {
        throw new Error(`Failed to fetch resources: ${response.statusText}`);
      }
      return response.json();
    }
  } catch (error) {
    console.error('Error fetching resources:', error);
    // Fallback to empty array
    return [];
  }
}

export async function fetchRecipes(resourceId?: string) {
  try {
    if (isStaticExport) {
      // In production with static export, load from static JSON
      const response = await fetch(`${basePath}/api/recipes.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch recipes: ${response.statusText}`);
      }
      const recipes = await response.json();
      
      // Filter by resource if specified
      if (resourceId) {
        return recipes.filter((recipe: any) =>
          recipe.outputs.some((output: any) => output.id === resourceId)
        );
      }
      
      return recipes;
    } else {
      // In development or regular production, use API route
      const url = resourceId ? `/api/recipes?resource=${resourceId}` : '/api/recipes';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch recipes: ${response.statusText}`);
      }
      return response.json();
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    // Fallback to empty array
    return [];
  }
}

// For backward compatibility
export const fetchRecipesByResource = (resourceId: string) => fetchRecipes(resourceId); 