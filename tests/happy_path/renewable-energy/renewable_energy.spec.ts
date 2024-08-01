import { test, expect } from '@playwright/test';

/**
 * Test Suite for Happy Path: "Nur Strom aus erneuerbarer Energie" Option
 *
 * This test suite verifies the happy path scenario for selecting the "Nur Strom aus erneuerbarer Energie"
 * (Only Renewable Energy) option in the tariff recommendation form. It covers the following scenarios:
 *
 * 1. Open the website
 * 2. Enter Valid Number of People   
 * 3. Enter Valid Annual Consumption
 * 4. Enter Valid Zip Code
 * 5. Select the "Nur Strom aus erneuerbarer Energie" Checkbox
 * 6. Submit the Form
 * 7. Verify the Display of Tariffs with Renewable Energy Only
 *
 * Refer to the documentation in `happy-path-renewable-energy.md` for detailed acceptance criteria
 * and test scenarios.
 */

// Test setup to navigate to the page and accept cookies 
test.beforeEach(async ({ page }) => { 
    await page.goto('https://www.wienenergie.at/privat/produkte/strom/');
    await page.getByRole('button', { name: 'Auswahl akzeptieren' }).click();
});  

// Cleanup after each test 
test.afterEach(async ({ page }) => { 
    await page.close(); 
});

test.describe('Nur Strom aus erneuerbarer Energie', () => {
    test('verify display tariffs when option is selected ', async ({ page }) => {
        // Increment number people
        await page.getByLabel('Personen erhöhen').click();
        await page.getByLabel('Jahresverbrauch:').dblclick();
        // Fill in yearly consumption value and ZIP code
        await page.getByLabel('Jahresverbrauch:').fill('6000');   
        await page.getByPlaceholder('z.B.').click();
        await page.getByPlaceholder('z.B.').fill('1030'); 

        // Select 'Nur Strom aus erneuerbarer' option and click 'Tarife anzeigen' button
        await page.locator('label').filter({ hasText: 'Nur Strom aus erneuerbarer Energie' }).locator('div').first().click();
        await page.getByRole('button', { name: 'Tarife anzeigen' }).click();

        // Verify that the expected tariffs are visible
        await expect(page.getByRole('heading', { name: 'OPTIMA Entspannt', exact: true })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'OPTIMA Aktiv' })).toBeVisible();

        
    })
    
    
})
