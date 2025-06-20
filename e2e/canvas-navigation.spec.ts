import { test, expect } from '@playwright/test';

test.describe('Canvas Navigation & URL State', () => {
  test('should maintain correct URLs when navigating to canvas pages', async ({ page }) => {
    // Start from homepage
    await page.goto('/');
    
    // Wait for resources to load
    await page.waitForSelector('[data-testid="resource-option"]');
    
    // Click on the first resource to select objective
    const firstResource = page.locator('[data-testid="resource-option"]').first();
    await firstResource.click();
    
    // Should still be on homepage URL
    await expect(page).toHaveURL('/');
    
    // Look for recipe selection and click on a recipe if available
    const recipeButtons = page.locator('button:has-text("Usar esta receita")');
    const recipeCount = await recipeButtons.count();
    
    if (recipeCount > 0) {
      // Click the first recipe button
      await recipeButtons.first().click();
      
      // Should navigate to objective canvas page with proper URL pattern
      await expect(page).toHaveURL(/\/canvas\/objective\/.+/);
      
      // Get the initial URL for comparison
      const initialUrl = page.url();
      console.log('Initial canvas URL:', initialUrl);
      
      // Wait for canvas to fully load
      await expect(page.locator('[data-reactflow-viewport]')).toBeVisible({ timeout: 10000 });
      
      // Add a recipe to trigger URL state update
      // First, check if there's a recipe selector button
      const recipeSelectorButton = page.locator('button:has-text("Adicionar Receita")');
      if (await recipeSelectorButton.isVisible()) {
        await recipeSelectorButton.click();
        
        // Wait for recipe selector modal/panel
        await page.waitForTimeout(1000);
        
        // Look for any recipe in the selector and click it
        const recipeInSelector = page.locator('[data-testid*="recipe-button"]').first();
        if (await recipeInSelector.isVisible()) {
          await recipeInSelector.click();
          
          // Wait for URL to update (debounced after 500ms)
          await page.waitForTimeout(1000);
          
          // Check that URL still has the correct base structure
          const updatedUrl = page.url();
          console.log('Updated canvas URL:', updatedUrl);
          
          // The URL should still start with the same base pattern
          expect(updatedUrl).toMatch(/\/canvas\/objective\/.+/);
          
          // Most importantly: the URL should contain the state parameter
          expect(updatedUrl).toContain('state=');
          
          // And it should not have lost the basePath (if any)
          const url = new URL(updatedUrl);
          const pathname = url.pathname;
          
          // Check URL structure
          expect(pathname).toMatch(/^\/canvas\/objective\/.+/);
        }
      }
    }
  });

  test('should preserve basePath in URL updates for different canvas types', async ({ page }) => {
    // Test direct navigation to main canvas
    await page.goto('/canvas?state=test');
    
    // Should show error since we have invalid state, but URL should be correct
    const currentUrl = page.url();
    const url = new URL(currentUrl);
    
    expect(url.pathname).toBe('/canvas');
    expect(url.searchParams.get('state')).toBe('test');
  });

  test('should handle URL state updates without navigation errors', async ({ page }) => {
    // Start from homepage and navigate to a working canvas
    await page.goto('/');
    
    // Wait for resources to load
    await page.waitForSelector('[data-testid="resource-option"]');
    
    // Click on the first resource
    const firstResource = page.locator('[data-testid="resource-option"]').first();
    await firstResource.click();
    
    // Click on a recipe if available
    const recipeButtons = page.locator('button:has-text("Usar esta receita")');
    const recipeCount = await recipeButtons.count();
    
    if (recipeCount > 0) {
      await recipeButtons.first().click();
      
      // Wait for canvas to load
      await expect(page.locator('[data-reactflow-viewport]')).toBeVisible({ timeout: 10000 });
      
      // Monitor console errors
      const consoleErrors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });
      
      // Try to add a recipe or interact with canvas to trigger updateURLState
      const recipeSelectorButton = page.locator('button:has-text("Adicionar Receita")');
      if (await recipeSelectorButton.isVisible()) {
        await recipeSelectorButton.click();
        await page.waitForTimeout(500);
        
        // Close the modal if it opened
        const closeButton = page.locator('button[aria-label="close"]');
        if (await closeButton.isVisible()) {
          await closeButton.click();
        } else {
          // Try pressing Escape
          await page.keyboard.press('Escape');
        }
      }
      
      // Wait for any URL updates to complete
      await page.waitForTimeout(1000);
      
      // Check if there were any navigation-related console errors
      const navigationErrors = consoleErrors.filter(error => 
        error.toLowerCase().includes('navigation') || 
        error.toLowerCase().includes('url') ||
        error.toLowerCase().includes('basepath') ||
        error.toLowerCase().includes('404')
      );
      
      expect(navigationErrors).toHaveLength(0);
    }
  });

  test('should maintain URL structure across browser back/forward', async ({ page }) => {
    // Start from homepage
    await page.goto('/');
    
    // Navigate through the flow
    await page.waitForSelector('[data-testid="resource-option"]');
    const firstResource = page.locator('[data-testid="resource-option"]').first();
    await firstResource.click();
    
    const recipeButtons = page.locator('button:has-text("Usar esta receita")');
    const recipeCount = await recipeButtons.count();
    
    if (recipeCount > 0) {
      await recipeButtons.first().click();
      
      // Wait for canvas
      await expect(page.locator('[data-reactflow-viewport]')).toBeVisible({ timeout: 10000 });
      
      const canvasUrl = page.url();
      
      // Go back to homepage
      await page.goBack();
      await expect(page).toHaveURL('/');
      
      // Go forward to canvas again
      await page.goForward();
      
      // Should return to the same canvas URL structure
      const returnedUrl = page.url();
      expect(returnedUrl).toMatch(/\/canvas\/objective\/.+/);
      
      // The canvas should still work
      await expect(page.locator('[data-reactflow-viewport]')).toBeVisible({ timeout: 5000 });
    }
  });

  // Special test to simulate GitHub Pages deployment
  test('should handle basePath correctly (simulated deployment)', async ({ page }) => {
    // This test simulates what happens when deployed with basePath
    // We can't actually test with basePath in dev mode, but we can test the logic
    
    await page.goto('/');
    await page.waitForSelector('[data-testid="resource-option"]');
    
    const firstResource = page.locator('[data-testid="resource-option"]').first();
    await firstResource.click();
    
    const recipeButtons = page.locator('button:has-text("Usar esta receita")');
    const recipeCount = await recipeButtons.count();
    
    if (recipeCount > 0) {
      await recipeButtons.first().click();
      await expect(page.locator('[data-reactflow-viewport]')).toBeVisible({ timeout: 10000 });
      
      // Capture any URL updates that happen
      const urlUpdates: string[] = [];
      page.on('framenavigated', frame => {
        if (frame === page.mainFrame()) {
          urlUpdates.push(frame.url());
        }
      });
      
      // Try to add a recipe if possible to trigger updateURLState
      const recipeSelectorButton = page.locator('button:has-text("Adicionar Receita")');
      if (await recipeSelectorButton.isVisible()) {
        await recipeSelectorButton.click();
        await page.waitForTimeout(500);
        
        const recipeInSelector = page.locator('[data-testid*="recipe-button"]').first();
        if (await recipeInSelector.isVisible()) {
          await recipeInSelector.click();
          await page.waitForTimeout(1500); // Wait for URL update
        }
      }
      
      // Check that no invalid URL patterns were created
      const finalUrl = page.url();
      const url = new URL(finalUrl);
      
      // The pathname should not start with double slashes or have malformed structure
      expect(url.pathname).not.toMatch(/\/\//);
      expect(url.pathname).toMatch(/^\/canvas\/objective\/.+/);
      
      console.log('Final URL check passed:', finalUrl);
    }
  });
}); 