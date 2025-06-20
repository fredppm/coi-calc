/**
 * Utility function to generate correct image URLs for both local development and GitHub Pages deployment
 */

export const getImageUrl = (imagePath: string): string => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In production on GitHub Pages, we need to add the basePath
  if (typeof window !== 'undefined' && window.location.hostname === 'fredppm.github.io') {
    return `/coi-calc/${cleanPath}`;
  }
  
  // For local development or other deployments
  return `/${cleanPath}`;
};

/**
 * Process image path from data - now simply returns the URL without conversion
 * since all files are normalized to snake_case
 */
export const processImagePath = (imagePath: string): string => {
  return getImageUrl(imagePath);
};

 