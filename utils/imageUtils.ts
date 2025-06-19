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
 * Convert snake_case to Title_Case for filenames (matches actual file naming convention)
 */
const snakeToTitleCase = (str: string): string => {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('_');
};

/**
 * Process image path from data to ensure it works correctly across environments
 * Automatically handles case mismatches between data and actual file names
 */
export const processImagePath = (imagePath: string): string => {
  // Extract filename from path
  const pathParts = imagePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const basePath = pathParts.slice(0, -1).join('/');
  
  // If filename is in snake_case (all lowercase with underscores), convert to Title_Case
  if (fileName.includes('_') && fileName === fileName.toLowerCase()) {
    const fileNameWithoutExt = fileName.replace('.png', '');
    const titleCaseFileName = snakeToTitleCase(fileNameWithoutExt) + '.png';
    const titleCasePath = `${basePath}/${titleCaseFileName}`;
    
    return getImageUrl(titleCasePath);
  }
  
  // For files that are already properly cased, use as-is
  return getImageUrl(imagePath);
}; 