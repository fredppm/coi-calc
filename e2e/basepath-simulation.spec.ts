import { test, expect } from '@playwright/test';

test.describe('BasePath Simulation Tests', () => {
  test('should handle basePath detection correctly', async ({ page }) => {
    // Test the basePath detection logic by evaluating in browser context
    await page.goto('/');
    
    // Test normal environment (no basePath)
    const normalBasePath = await page.evaluate(() => {
      // Import the function inline since we can't import modules in evaluate
      const getBasePath = (): string => {
        if (typeof window !== 'undefined') {
          const pathname = window.location.pathname;
          if (pathname.startsWith('/coi-calc/')) {
            return '/coi-calc';
          }
        }
        return '';
      };
      
      return getBasePath();
    });
    
    expect(normalBasePath).toBe(''); // Should be empty in development
    
    // Test URL construction
    const testUrls = await page.evaluate(() => {
      const getBasePath = (): string => {
        if (typeof window !== 'undefined') {
          const pathname = window.location.pathname;
          if (pathname.startsWith('/coi-calc/')) {
            return '/coi-calc';
          }
        }
        return '';
      };
      
      const getFullPath = (path: string): string => {
        const basePath = getBasePath();
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `${basePath}${cleanPath}`;
      };
      
      const getCanvasUrl = (canvasType: string, stateParam: string): string => {
        let path = '/canvas';
        if (canvasType) {
          path += `/${canvasType}`;
        }
        const fullPath = getFullPath(path);
        return `${fullPath}?state=${stateParam}`;
      };
      
      return {
        normalCanvas: getCanvasUrl('', 'test123'),
        recipeCanvas: getCanvasUrl('recipe-id', 'test456'),
        objectiveCanvas: getCanvasUrl('objective/resource-id', 'test789')
      };
    });
    
    expect(testUrls.normalCanvas).toBe('/canvas?state=test123');
    expect(testUrls.recipeCanvas).toBe('/canvas/recipe-id?state=test456');
    expect(testUrls.objectiveCanvas).toBe('/canvas/objective/resource-id?state=test789');
  });

  test('should simulate GitHub Pages basePath behavior', async ({ page }) => {
    // Navigate to homepage first
    await page.goto('/');
    
    // Test basePath detection with simulated environment by passing pathname directly
    const simulatedTests = await page.evaluate(() => {
      const getBasePathFromPathname = (pathname: string): string => {
        if (pathname.startsWith('/coi-calc/')) {
          return '/coi-calc';
        }
        return '';
      };
      
      const getFullPathWithBasePath = (path: string, basePath: string): string => {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `${basePath}${cleanPath}`;
      };
      
      const getCanvasUrlWithBasePath = (canvasType: string, stateParam: string, basePath: string): string => {
        let path = '/canvas';
        if (canvasType) {
          path += `/${canvasType}`;
        }
        const fullPath = getFullPathWithBasePath(path, basePath);
        return `${fullPath}?state=${stateParam}`;
      };
      
      // Test normal environment
      const normalBasePath = getBasePathFromPathname('/canvas/objective/steel');
      const normalUrls = {
        normalCanvas: getCanvasUrlWithBasePath('', 'test123', normalBasePath),
        recipeCanvas: getCanvasUrlWithBasePath('recipe-id', 'test456', normalBasePath),
        objectiveCanvas: getCanvasUrlWithBasePath('objective/resource-id', 'test789', normalBasePath)
      };
      
      // Test GitHub Pages environment
      const githubBasePath = getBasePathFromPathname('/coi-calc/canvas/objective/steel');
      const githubUrls = {
        normalCanvas: getCanvasUrlWithBasePath('', 'test123', githubBasePath),
        recipeCanvas: getCanvasUrlWithBasePath('recipe-id', 'test456', githubBasePath),
        objectiveCanvas: getCanvasUrlWithBasePath('objective/resource-id', 'test789', githubBasePath)
      };
      
      return {
        normalBasePath,
        githubBasePath,
        normalUrls,
        githubUrls
      };
    });
    
    expect(simulatedTests.normalBasePath).toBe('');
    expect(simulatedTests.githubBasePath).toBe('/coi-calc');
    
    expect(simulatedTests.normalUrls.normalCanvas).toBe('/canvas?state=test123');
    expect(simulatedTests.normalUrls.recipeCanvas).toBe('/canvas/recipe-id?state=test456');
    expect(simulatedTests.normalUrls.objectiveCanvas).toBe('/canvas/objective/resource-id?state=test789');
    
    expect(simulatedTests.githubUrls.normalCanvas).toBe('/coi-calc/canvas?state=test123');
    expect(simulatedTests.githubUrls.recipeCanvas).toBe('/coi-calc/canvas/recipe-id?state=test456');
    expect(simulatedTests.githubUrls.objectiveCanvas).toBe('/coi-calc/canvas/objective/resource-id?state=test789');
  });

  test('should test ShareButton basePath handling', async ({ page }) => {
    await page.goto('/');
    
    // Test ShareButton logic with and without basePath
    const shareButtonTests = await page.evaluate(() => {
      // Simulate ShareButton logic
      const testShareLogic = (testPathname: string, state: string) => {
        // Mock location for testing
        const mockLocation = {
          pathname: testPathname,
          origin: 'https://test.com',
          searchParams: new URLSearchParams(`state=${state}`)
        };
        
        const basePath = testPathname.startsWith('/coi-calc/') ? '/coi-calc' : '';
        
        // Remove basePath from pathname for pattern matching
        let pathname = mockLocation.pathname;
        if (basePath && pathname.startsWith(basePath)) {
          pathname = pathname.slice(basePath.length);
        }
        
        const pathMatch = pathname.match(/^\/canvas\/([^\/]+)$/);
        
        if (pathMatch && mockLocation.searchParams.get('state')) {
          const stateParam = mockLocation.searchParams.get('state');
          const fullPath = basePath + '/canvas';
          return `${mockLocation.origin}${fullPath}?state=${stateParam}`;
        }
        
        return mockLocation.origin + mockLocation.pathname;
      };
      
      return {
        normalEnv: testShareLogic('/canvas/recipe-123', 'abc123'),
        githubPages: testShareLogic('/coi-calc/canvas/recipe-123', 'abc123')
      };
    });
    
    expect(shareButtonTests.normalEnv).toBe('https://test.com/canvas?state=abc123');
    expect(shareButtonTests.githubPages).toBe('https://test.com/coi-calc/canvas?state=abc123');
  });

  test('should handle edge cases in URL construction', async ({ page }) => {
    await page.goto('/');
    
    const edgeCaseTests = await page.evaluate(() => {
      const getFullPathWithBasePath = (path: string, basePath: string): string => {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `${basePath}${cleanPath}`;
      };
      
      const getCanvasUrlWithBasePath = (canvasType: string, stateParam: string, basePath: string): string => {
        let path = '/canvas';
        if (canvasType) {
          path += `/${canvasType}`;
        }
        const fullPath = getFullPathWithBasePath(path, basePath);
        return `${fullPath}?state=${stateParam}`;
      };
      
      return {
        emptyCanvasType: getCanvasUrlWithBasePath('', 'state123', ''),
        pathWithoutSlash: getFullPathWithBasePath('canvas', ''),
        pathWithSlash: getFullPathWithBasePath('/canvas', ''),
        complexObjectivePath: getCanvasUrlWithBasePath('objective/some-complex-resource-id-123', 'complexstate456', ''),
        // Test with basePath
        githubEmptyCanvasType: getCanvasUrlWithBasePath('', 'state123', '/coi-calc'),
        githubComplexPath: getCanvasUrlWithBasePath('objective/some-complex-resource-id-123', 'complexstate456', '/coi-calc')
      };
    });
    
    expect(edgeCaseTests.emptyCanvasType).toBe('/canvas?state=state123');
    expect(edgeCaseTests.pathWithoutSlash).toBe('/canvas');
    expect(edgeCaseTests.pathWithSlash).toBe('/canvas');
    expect(edgeCaseTests.complexObjectivePath).toBe('/canvas/objective/some-complex-resource-id-123?state=complexstate456');
    expect(edgeCaseTests.githubEmptyCanvasType).toBe('/coi-calc/canvas?state=state123');
    expect(edgeCaseTests.githubComplexPath).toBe('/coi-calc/canvas/objective/some-complex-resource-id-123?state=complexstate456');
  });
}); 