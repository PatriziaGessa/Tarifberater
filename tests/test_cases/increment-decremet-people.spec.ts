import { test, expect } from '@playwright/test';

/**
 * Test Suite for User Story 1: Increment and Decrement Number of People
 *
 * This test suite verifies the functionality of incrementing and decrementing
 * the number of people on the page. It covers the following scenarios:
 * 
 * 1. Verify Initial Number
 * 2. Increment the Number
 * 3. Decrement the Number
 * 4. Handle Minimum Value
 * 5. Handle Maximum Value
 *
 * Refer to the documentation in `user-story-1.md` for detailed acceptance criteria
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

test.describe('User Story 1: Adjusting the Number of People', () => {

    test('Verify Initial Number', async ({ page }) => {
       // Verify the visibility of the 'Personen verringern' label
        await page.waitForTimeout(1000); // Adding a 1-second pause
        await expect(page.getByText('2 Personen')).toBeVisible();
    })

    test('Increment the Number', async ({ page }) => {
        // Verify that the button to increase the number of people is visible
        await page.waitForTimeout(1000); // Adding a 1-second pause
        const increaseButton = page.getByLabel('Personen erhöhen');
        // Verify that the button is visible
        await expect(increaseButton).toBeVisible();
        // Verify that the button is enabled and clickable
        await expect(increaseButton).toBeEnabled();
        await increaseButton.click();
    
        // Verify that the text showing '3 Personen' is now visible
        await expect(page.getByText('3 Personen')).toBeVisible();
        // Verify that the button is still visible and clickable
        await expect(increaseButton).toBeVisible();
        await expect(increaseButton).toBeEnabled();
        // Click the button to increase the number of people again
        await increaseButton.click();
    })
    
    test('Decrement the Number', async ({ page }) => {
        // Locate the button to decrease the number of people
        await page.waitForTimeout(1000); // Adding a 1-second pause
        const decreaseButton = page.getByLabel('Personen verringern');
        // Verify that the button to decrease the number of people is visible
        await expect(decreaseButton).toBeVisible();

        // Verify that the button is enabled and clickable
        await expect(decreaseButton).toBeEnabled();
        // Click the button to decrease the number of people
        await decreaseButton.click();

        // Verify that the text showing '1 Person' is now visible
        await expect(page.getByText('1 Person')).toBeVisible();      
    })
    
    test('Verify Minimum Value', async ({ page }) => {
        await page.waitForTimeout(1000); // Adding a 1-second pause
        const decreaseButton = page.getByLabel('Personen verringern');
        // Verify that the button is enabled and clickable
        await expect(decreaseButton).toBeEnabled();
        // Click the button to decrease the number of people
        await decreaseButton.click();

        // Verify that the button is no longer clickable (i.e., disabled)
        await expect(decreaseButton).toBeDisabled();
 
    }) 

    test('Verify Maximum Value', async ({ page }) => {
        const increaseButton = page.getByLabel('Personen erhöhen');
        await expect(increaseButton).toBeEnabled();      
        await increaseButton.click();
        await increaseButton.click();

        // Verify that the text showing '4 Personen' is now visible
        await expect(page.getByText('4 Personen')).toBeVisible();
        // Verify that the button is still visible and clickable
        await expect(increaseButton).toBeVisible();
        await expect(increaseButton).toBeEnabled();
     
        // Click the button to increase the number of people once more
        await increaseButton.click();
        // Verify that the text showing '5 Personen & mehr' is now visible
        await expect(page.getByText('5 Personen & mehr')).toBeVisible();  
        // Verify that the button is no longer clickable (disabled)
        await expect(increaseButton).toBeDisabled();

 
    })    
})
