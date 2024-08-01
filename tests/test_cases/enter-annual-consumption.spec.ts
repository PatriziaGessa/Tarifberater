import { test, expect } from '@playwright/test';

/**
 * Test Suite for User Story 2: Enter Annual Consumption
 *
 * This test suite verifies the functionality of the annual consumption input field
 * on the page. It covers the following scenarios:
 * 
 * 1. Verify Visibility & Initial Input Value "Jahresverbrauch" field
 * 2. Enter Valid Consumption
 * 3. Enter Invalid Consumption (Negative Number)
 * 4. Re-enter Correct Value After Error 
 *
 * Refer to the documentation in `user-story-2.md` for detailed acceptance criteria
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

test.describe('User Story 2: Enter Annual Consumption', () => {

    test('Verify Visibility & Initial Input Value "Jahresverbrauch" field', async ({ page }) => {
        // Locate the input field by its ID or class
        const inputField = page.locator('input[name="usage"]');
    
        // Check if the input field is visible
        await expect(inputField).toBeVisible();
        // Verify the initial value
        await expect(inputField).toHaveValue('2300');
        
    })

    test('Enter Valid Consumption', async ({ page }) => {
        // Locate the input field by its label
        const inputField = page.getByLabel('Jahresverbrauch:');
        // Check if the input field is visible and clickable
        await expect(inputField).toBeVisible();
       
        await page.getByLabel('Jahresverbrauch:').click();
        await page.getByLabel('Jahresverbrauch:').fill('6000');
        await expect(page.getByLabel('Jahresverbrauch:')).toBeVisible();
        // Verify that the entered value is displayed correctly
        await expect(inputField).toHaveValue('6000');
        
    })

    test('Verify Invalid Consumption Data)', async ({ page }) => {
        // Locate the input field and error message container by their labels
        const inputField = page.getByLabel('Jahresverbrauch:');
        const errorMessageContainer = page.locator('#usage');
    
        // Define invalid values and expected error messages
         const invalidValues = [

            { value: '-100', expectedError: 'Bitte geben Sie Ihren Jahresverbrauch ein' }, // Negative value
            { value: '1000000', expectedError: 'Bitte geben Sie einen Jahresverbrauch bis maximal 40,000 kWh ein.' }, // Exceeding range
        ];
    
        for (const { value, expectedError } of invalidValues) {
        // Focus on the input field and enter the invalid value
        await inputField.click();
        await inputField.fill(value);
        await page.getByLabel('Jahresverbrauch:').press('Enter');
        
        // Verify that the error message is visible and correct
        await expect(errorMessageContainer).toBeVisible();
        await expect(errorMessageContainer).toHaveText(expectedError);
        }
        
    })
    test('Re-enter Correct Value After Error', async ({ page }) => {
        const inputField = page.getByLabel('Jahresverbrauch:');
        const errorMessageContainer = page.locator('#usage');
    
        // Define the invalid and valid values
        const invalidValue = '-100';
        const validValue = '6000';
    
        // Step 1: Enter an invalid value and verify the error message
        await inputField.click();
        await inputField.fill(invalidValue);
        await page.getByLabel('Jahresverbrauch:').press('Enter');
        
        // Verify that the error message is visible and correct
        await expect(errorMessageContainer).toBeVisible();
        await expect(errorMessageContainer).toHaveText('Bitte geben Sie Ihren Jahresverbrauch ein');
    
        // Step 2: Enter a valid value and verify that the error message disappears
        await inputField.click();
        await inputField.fill(validValue);
        await page.getByLabel('Jahresverbrauch:').press('Enter');
        
        // Verify that the error message is no longer visible
        await expect(errorMessageContainer).toBeHidden();

        
    })
    


    
    
    
    
    

 
})
