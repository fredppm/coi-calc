/**
 * Utility functions for recipe calculations and normalization
 */

/**
 * Calculate normalized amount based on normalization settings
 * @param amount - Original amount from recipe
 * @param recipeTime - Recipe time in seconds
 * @param normalizeToSixtySeconds - Whether to normalize to 60 seconds
 * @param multiplier - Recipe multiplier (default: 1)
 * @returns Normalized amount rounded to 2 decimal places
 */
export const getNormalizedAmount = (
  amount: number,
  recipeTime: number,
  normalizeToSixtySeconds: boolean = false,
  multiplier: number = 1
): number => {
  const normalizationFactor = normalizeToSixtySeconds ? 60 / recipeTime : 1;
  return Math.round(amount * multiplier * normalizationFactor * 100) / 100;
};

/**
 * Get display time string for a recipe
 * @param recipeTime - Recipe time in seconds
 * @param normalizeToSixtySeconds - Whether normalization is enabled
 * @returns Formatted time string
 */
export const getDisplayTime = (
  recipeTime: number,
  normalizeToSixtySeconds: boolean = false
): string => {
  return normalizeToSixtySeconds ? '60s (normalized)' : `${recipeTime}s`;
};

/**
 * Round amount to 1 decimal place for display in summaries
 * @param amount - Amount to round
 * @returns Rounded amount
 */
export const roundForDisplay = (amount: number): number => {
  return Math.round(amount * 10) / 10;
};

/**
 * Clamp multiplier value to valid range (1-50)
 * @param multiplier - Input multiplier value
 * @returns Clamped multiplier value
 */
export const clampMultiplier = (multiplier: number): number => {
  return Math.max(1, Math.min(50, multiplier));
};

/**
 * Calculate normalized amount for balance calculations (always 60s normalized)
 * @param amount - Original amount from recipe
 * @param recipeTime - Recipe time in seconds
 * @param multiplier - Recipe multiplier (default: 1)
 * @returns Amount normalized to 60s for balance calculations
 */
export const getNormalizedAmountForBalance = (
  amount: number,
  recipeTime: number,
  multiplier: number = 1
): number => {
  return amount * multiplier * (60 / recipeTime);
};

/**
 * Validate if a recipe object has all required properties
 * @param recipe - Recipe object to validate
 * @returns true if recipe is valid, false otherwise
 */
export const isValidRecipe = (recipe: any): boolean => {
  return !!(
    recipe &&
    recipe.id &&
    recipe.name &&
    recipe.building &&
    Array.isArray(recipe.inputs) &&
    Array.isArray(recipe.outputs) &&
    typeof recipe.time === 'number' &&
    recipe.time > 0
  );
};

/**
 * Filter and validate an array of recipes, logging any invalid ones
 * @param recipes - Array of recipes to validate
 * @param context - Context string for logging (e.g., 'existing recipes', 'fetched recipes')
 * @returns Array of valid recipes
 */
export const validateRecipes = (recipes: any[], context: string = 'recipes'): any[] => {
  return recipes.filter(recipe => {
    const valid = isValidRecipe(recipe);
    if (!valid) {
      console.warn(`Invalid recipe found in ${context}:`, {
        recipe,
        hasId: !!recipe?.id,
        hasName: !!recipe?.name,
        hasBuilding: !!recipe?.building,
        hasInputs: Array.isArray(recipe?.inputs),
        hasOutputs: Array.isArray(recipe?.outputs),
        hasValidTime: typeof recipe?.time === 'number' && recipe?.time > 0
      });
    }
    return valid;
  });
}; 