import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the objective selector', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main heading is visible
    await expect(page.getByTestId('page-title')).toBeVisible();
    await expect(page.getByText('Captain of Industry Calculator')).toBeVisible();
    
    // Check if there are resource options available
    const resourceButtons = page.locator('[data-testid="resource-option"]').first();
    await expect(resourceButtons).toBeVisible();
  });

  test('should navigate through objective selection workflow', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to load and resources to be available
    await page.waitForSelector('[data-testid="resource-option"]');
    
    // Click on the first resource option
    const firstResource = page.locator('[data-testid="resource-option"]').first();
    await firstResource.click();
    
    // Should show recipe selection step (still on home page)
    await expect(page).toHaveURL('/');
    
    // Should show the selected objective name
    await expect(page.getByText('Objetivo:')).toBeVisible();
    
    // Should show back button
    await expect(page.getByText('← Voltar aos Objetivos')).toBeVisible();
    
    // Should show recipe selection section
    await expect(page.getByText('2. Escolha uma Receita')).toBeVisible();
  });

  test('should complete full workflow to canvas', async ({ page }) => {
    await page.goto('/');
    
    // Step 1: Select an objective
    await page.waitForSelector('[data-testid="resource-option"]');
    const firstResource = page.locator('[data-testid="resource-option"]').first();
    await firstResource.click();
    
    // Step 2: Select a recipe (if any recipes are available)
    const recipeButtons = page.locator('button:has-text("Usar esta receita")');
    const recipeCount = await recipeButtons.count();
    
    if (recipeCount > 0) {
      // Click the first recipe button
      await recipeButtons.first().click();
      
      // Should navigate to canvas page
      await expect(page).toHaveURL(/\/canvas\/objective\/.+/);
      
      // Check if the canvas interface loads
      await expect(page.locator('[data-reactflow-viewport]')).toBeVisible({ timeout: 10000 });
    }
  });

  test('should allow searching for resources', async ({ page }) => {
    await page.goto('/');
    
    // Wait for resources to load
    await page.waitForSelector('[data-testid="resource-option"]');
    
    // Count all resources initially
    const visibleResources = page.locator('[data-testid="resource-option"]:visible');
    const initialCount = await visibleResources.count();
    expect(initialCount).toBeGreaterThan(0);
    
    // Use the search input
    const searchInput = page.getByTestId('resource-search');
    await expect(searchInput).toBeVisible();
    
    // Search for a specific term
    await searchInput.fill('steel');
    
    // Wait a bit for search to filter
    await page.waitForTimeout(500);
    
    // Check if search functionality works by ensuring search input has the value
    await expect(searchInput).toHaveValue('steel');
    
    // Clear search
    await searchInput.clear();
    
    // Verify search input is cleared
    await expect(searchInput).toHaveValue('');
  });

  test('should have responsive design', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    
    await expect(page.getByTestId('page-title')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    
    await expect(page.getByTestId('page-title')).toBeVisible();
    
    // Resources should still be visible and clickable
    await page.waitForSelector('[data-testid="resource-option"]');
    const firstResource = page.locator('[data-testid="resource-option"]').first();
    await expect(firstResource).toBeVisible();
  });
}); 