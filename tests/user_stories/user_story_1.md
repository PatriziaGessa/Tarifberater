# User Story 1: Adjusting the Number of People

## Description
As a user, I want to be able to increment and decrement the number of people so that I can specify the energy consumption for the correct number of people.

## Acceptance Criteria
1. **Initial State**
   - The page should load with an initial number of people displayed (e.g., "2 Personen").

2. **Increment Functionality**
   - When the user clicks the "increment" button, the number of people should increase by one.
   - The updated number should be displayed correctly on the page.
   - The number of people should not go above the maximum value (5).

3. **Decrement Functionality**
   - When the user clicks the "decrement" button, the number of people should decrease by one.
   - The updated number should be displayed correctly on the page.
   - The number of people should not go below the minimum value (1).

4. **Edge Cases**
   - If the number of people is at the minimum value, clicking the "decrement" button should not change the count.
   - If the number of people is at the maximum value, clicking the "increment" button should not change the count.

## Test Case
The test case for this user story is located in the file `tests/test_cases/increment-decrement-people.spec.ts`.

### Test Scenarios
1. **Verify Initial Number**
   - Navigate to the page.
   - Verify the initial number of people is "2 Personen".

2. **Increment the Number**
   - Click the "increment" button.
   - Verify that the number of people increases to "3 Personen".

3. **Decrement the Number**
   - Click the "decrement" button.
   - Verify that the number of people decreases to "1 Personen".

4. **Handle Minimum Value**
   - Continue clicking the "decrement" button when the number is at the minimum value.
   - Verify that the number of people remains at the minimum value "1 Personen".
   - Confirm that the "decrement" button is not clickable or is disabled at this value.

5. **Handle Maximum Value**
   - Continue clicking the "increment" button when the number is at the maximum value.
   - Verify that the number of people remains at the maximum value "5 Personen".
   - Confirm that the "increment" button is not clickable or is disabled at this value.