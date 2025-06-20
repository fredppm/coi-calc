/**
 * Utility function to generate correct image URLs for both local development and any deployment
 * Handles basePath automatically for regular <img> tags
 */

export const getImageUrl = (imagePath: string): string => {
  // Remove leading slash if present to normalize
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // For server-side rendering, we can't detect the environment
  if (typeof window === 'undefined') {
    return `/${cleanPath}`;
  }
  
  // Client-side: detect if we're running with a basePath
  const currentPath = window.location.pathname;
  
  // Simple detection: if the current path starts with something that's not our known pages
  // and contains multiple segments, we likely have a basePath
  const segments = currentPath.split('/').filter(Boolean);
  
  if (segments.length > 0) {
    const firstSegment = segments[0];
    
    // Known page routes that should NOT be treated as basePath
    const knownPages = ['canvas', 'api', '_next', '_app'];
    
    // If the first segment is not a known page route, it's likely a basePath
    if (!knownPages.includes(firstSegment)) {
      return `/${firstSegment}/${cleanPath}`;
    }
  }
  
  // Default: no basePath
  return `/${cleanPath}`;
};

/**
 * Process image path from data - handles both absolute and relative paths
 */
export const processImagePath = (imagePath: string): string => {
  return getImageUrl(imagePath);
}; 

 