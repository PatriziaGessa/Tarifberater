import { test, expect } from '@playwright/test';

/**
 * Test Suite for User Story 3: Enter ZIP Code - Postleitzahl
 * 
 * This test suite verifies the functionality of incrementing and decrementing
 * the number of people on the page. It covers the following scenarios:
 * 
 * 1. Checking if the input field is visible and initially empty.
 * 2. Verifying acceptance of a valid ZIP code.
 * 3. Handling short ZIP codes (less than 4 digits).
 * 4. Handling long ZIP codes (more than 4 digits).
 * 5. Re-entering and validating a corrected ZIP code after an error. 
 * 
 * Refer to the documentation in `tests\user_stories\user_story_3.md` for detailed acceptance criteria
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

test.describe('User Story 3: Enter ZIP Code - Postleitzahl', () => {

    test('Verify Initial Input Value', async ({ page }) => {
        // Locate the input field by its placeholder
        const input = page.getByPlaceholder('z.B.');
        // Verify that the input field is visible
        await expect(input).toBeVisible();
        // Verify that the input field is initially empty
        await expect(input).toHaveValue('');
        // Verify that the input field is clickable
        await expect(input).toBeEnabled(); 
        
    })

    test('Enter Valid ZIP Code', async ({ page }) => {
        // Locate the input field by its placeholder and click on it
        const input = page.getByPlaceholder('z.B.');
        await input.click();
        // Fill the input field with the ZIP code '1030'
        await input.fill('1030');
        // Verify that the input field is visible
        await expect(input).toBeVisible();
        // Verify that the input field contains the value '1030'
        await expect(input).toHaveValue('1030');        
    })

    test('Enter Invalid ZIP Code (Too Short)', async ({ page }) => {
        // Enter a 3-digit ZIP code into the input field
        await page.getByPlaceholder('z.B.').fill('123');
        await expect(page.getByPlaceholder('z.B.')).toHaveValue('123');
        await page.getByPlaceholder('z.B.').press('Enter');
    
        // Define the expected error message text
        const expectedErrorText = 'Bitte geben Sie eine gültige';
           
        // Check if the error message is visible
        await expect(page.getByText(expectedErrorText)).toBeVisible();
        await page.waitForTimeout(1000); // Wait for 1 second

        // Check if the entered ZIP code is still visible in the input field
        await expect(page.getByPlaceholder('z.B.')).toHaveValue('123');
        await page.waitForTimeout(1000); // Wait for 1 second 

    })

    test('Enter Invalid ZIP Code (Too Long)', async ({ page }) => {
        // Enter a long-digit ZIP code into the input field
        await page.getByPlaceholder('z.B.').fill('111111111100000000');
        await expect(page.getByPlaceholder('z.B.')).toHaveValue('111111111100000000');
        await page.getByPlaceholder('z.B.').press('Enter');
     
        // Define the expected error message text
        const expectedErrorText = 'Bitte geben Sie eine gültige';
            
        // Check if the error message is visible
        await expect(page.getByText(expectedErrorText)).toBeVisible();
        await page.waitForTimeout(1000); // Wait for 1 second
 
        // Check if the entered ZIP code is still visible 
        await expect(page.getByPlaceholder('z.B.')).toHaveValue('111111111100000000');
        await page.waitForTimeout(1000); // Wait for 1 second 
    
    })

    test('Re-enter Correct Value After Error', async ({ page }) => {
        await page.getByPlaceholder('z.B.').click(); 
        await page.getByPlaceholder('z.B.').fill('103'); // Enter invalid ZIP code
        await page.getByPlaceholder('z.B.').press('Enter'); // Submit the input
        
        //Verify that an error message is displayed
        const errorMessage = 'Bitte geben Sie eine gültige Postleitzahl an';
        await expect(page.getByText(errorMessage)).toBeVisible(); // Check if error message is visible

        // Pause to observe 
        await page.waitForTimeout(1000); // Wait for 1 second

        // Modify the ZIP code to a valid format 
        await page.getByPlaceholder('z.B.').click(); 
        await page.getByPlaceholder('z.B.').fill('1030'); // Enter valid ZIP code
        await page.getByPlaceholder('z.B.').press('Enter'); // Submit the input
    
        // Verify that the system accepts the corrected ZIP code without error
        await expect(page.getByPlaceholder('z.B.')).toHaveValue('1030'); // Check if the field shows the correct value
        await expect(page.getByText(errorMessage)).not.toBeVisible(); // Ensure the error message is no longer visible

        // Verify that tariffs are displayed
        const tariffWrapper = page.locator('.swiper-wrapper');
        await expect(tariffWrapper).toBeVisible({ timeout: 10000 });      
    });
   
})
