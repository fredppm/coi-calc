/**
 * Utility function to generate correct image URLs for both local development and any deployment
 * Works automatically with Next.js basePath configuration
 */

export const getImageUrl = (imagePath: string): string => {
  // Remove leading slash if present to normalize
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Simply prepend with / - Next.js will automatically handle basePath
  // when the app is built with basePath configuration
  return `/${cleanPath}`;
};

/**
 * Process image path from data - handles both absolute and relative paths
 */
export const processImagePath = (imagePath: string): string => {
  return getImageUrl(imagePath);
}; 

 