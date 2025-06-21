/**
 * URL utility functions that handle basePath configuration for GitHub Pages deployment
 */

/**
 * Get the base path from Next.js configuration
 * This returns the basePath if we're in a deployment environment, empty string for development
 */
export const getBasePath = (): string => {
  // In the browser, we can check if we're running with a basePath by examining the current location
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    
    // Check if we're running with /coi-calc basePath (GitHub Pages)
    if (pathname.startsWith('/coi-calc/')) {
      return '/coi-calc';
    }
  }
  
  // In development or when no basePath is detected
  return '';
};

/**
 * Construct a complete URL path that includes the basePath if necessary
 * @param path - The relative path (e.g., "/canvas", "/canvas/objective/123")
 * @returns Complete path including basePath
 */
export const getFullPath = (path: string): string => {
  const basePath = getBasePath();
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
};

/**
 * Construct a canvas URL with state parameter that includes proper basePath
 * @param stateParam - Encoded state parameter
 * @returns Complete URL with basePath and state
 */
export const getCanvasUrl = (stateParam: string): string => {
  const fullPath = getFullPath('/canvas');
  return `${fullPath}?state=${stateParam}`;
};

/**
 * Update the browser URL state without triggering navigation
 * This properly handles basePath for deployment environments
 * @param stateParam - Encoded state parameter
 */
export const updateBrowserUrl = (stateParam: string): void => {
  if (typeof window === 'undefined') return;
  
  const url = getCanvasUrl(stateParam);
  window.history.replaceState(null, '', url);
};

 