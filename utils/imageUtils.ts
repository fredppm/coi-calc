/**
 * Simple image utilities that work with Next.js basePath
 */

/**
 * Process image path - simply returns the path for Next.js to handle
 * Next.js automatically applies basePath when configured
 */
export const processImagePath = (imagePath: string): string => {
  return imagePath;
};

/**
 * Alias for processImagePath for backward compatibility
 */
export const getImageUrl = processImagePath; 

 