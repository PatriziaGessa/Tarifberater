import { test, expect } from '@playwright/test';

/**
 * Test Suite for Happy Path: "Nur mit Preisgarantie" Option
 *
 * This test suite verifies the happy path scenarios for selecting the "Nur mit Preisgarantie"
 * (Only Preisgarantie) option in the tariff recommendation form. It covers the following scenarios:
 *
 * 1. Open the website
 * 2. Enter Valid Number of People   
 * 3. Enter Valid Annual Consumption
 * 4. Enter Valid Zip Code
 * 5. Select the "Nur mit Preisgarantie" Checkbox
 * 6. Submit the Form
 * 7. Verify the Display of Tariffs with Preisgarantie Only
 * 
 *  The suite includes three specific scenarios:
 * - Default number of people (2)
 * - Minimum number of people (1)
 * - Maximum number of people (5)
 *
 * Refer to the documentation in `happy-path-preisgarantie.md` for detailed acceptance criteria
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

test.describe('Nur mit Preisgarantie', () => {

    test('Verify display of tariffs with default number of people', async ({ page }) => {
        await page.getByLabel('Jahresverbrauch:').dblclick();
        // Fill in yearly consumption value and ZIP code
        await page.getByLabel('Jahresverbrauch:').fill('6000');   
        await page.getByPlaceholder('z.B.').click();
        await page.getByPlaceholder('z.B.').fill('1030'); 

        // Select 'Nur mit Preisgarantie' option and click 'Tarife anzeigen' button
        await page.locator('label').filter({ hasText: 'Nur mit Preisgarantie' }).locator('div').first().click();
        await page.getByRole('button', { name: 'Tarife anzeigen' }).click();

        // Verify that the expected tariffs are visible
        await expect(page.getByRole('heading', { name: 'OPTIMA Entspannt', exact: true })).toBeVisible();
        const priceElements = page.locator('.Content-module__content-U7Pyvt');
        await expect(priceElements.first()).toBeVisible();

        // Verify OPTIMA Akti tariffs is not visible
        await expect(page.getByRole('heading', { name: 'OPTIMA Aktiv' })).not.toBeVisible();      
        
    })

    test('verify display tariffs when option is selected with 1 person', async ({ page }) => {
        // Set number of people to 1
        await page.getByLabel('Personen verringern').click(); // Assuming "Personen reduzieren" decreases the number of people
        
        // Set yearly consumption value and ZIP code
        await page.getByLabel('Jahresverbrauch:').dblclick();
        await page.getByLabel('Jahresverbrauch:').fill('3000'); // Example value
        await page.getByPlaceholder('z.B.').click();
        await page.getByPlaceholder('z.B.').fill('1030');
        
        // Select 'Nur mit Preisgarantie' option and click 'Tarife anzeigen' button
        await page.locator('label').filter({ hasText: 'Nur mit Preisgarantie' }).locator('div').first().click();
        await page.getByRole('button', { name: 'Tarife anzeigen' }).click();
        
        // Verify that the expected tariffs are visible
        await expect(page.getByRole('heading', { name: 'OPTIMA Entspannt', exact: true })).toBeVisible();
        const priceElements = page.locator('.Content-module__content-U7Pyvt');
        await expect(priceElements.first()).toBeVisible();
        
        // Verify OPTIMA Akti tariffs is not visible
        await expect(page.getByRole('heading', { name: 'OPTIMA Aktiv' })).not.toBeVisible();    
       
    });

    test('verify display tariffs when option is selected with maximum number of people ', async ({ page }) => {
        // Increment number people
        await page.getByLabel('Personen erhöhen').click();
        await page.getByLabel('Personen erhöhen').click();
        await page.getByLabel('Personen erhöhen').click();
        await page.getByLabel('Jahresverbrauch:').dblclick();
        // Fill in yearly consumption value and ZIP code
        await page.getByLabel('Jahresverbrauch:').fill('5000');   
        await page.getByPlaceholder('z.B.').click();
        await page.getByPlaceholder('z.B.').fill('1030'); 

        // Select 'Nur mit Preisgarantie' option and click 'Tarife anzeigen' button
        await page.locator('label').filter({ hasText: 'Nur mit Preisgarantie' }).locator('div').first().click();
        await page.getByRole('button', { name: 'Tarife anzeigen' }).click();

        // Verify that the expected tariffs are visible
        await expect(page.getByRole('heading', { name: 'OPTIMA Entspannt', exact: true })).toBeVisible();
        const priceElements = page.locator('.Content-module__content-U7Pyvt');
        await expect(priceElements.first()).toBeVisible();

        // Verify OPTIMA Akti tariffs is not visible
        await expect(page.getByRole('heading', { name: 'OPTIMA Aktiv' })).not.toBeVisible();    
        
    })
       
})
