# User Story 2: Enter Annual Consumption

## Description
As a user, I want to be able to enter my annual consumption value into the input field, so that the system can process my input and provide appropriate recommendations.

## Acceptance Criteria
1. **Initial State**
   - The page should load with a pre-filled annual consumption input field (e.g., "2300").

2. **Enter Valid Consumption**
   - When the user enters a valid annual consumption value (numeric), the value should be accepted without error.
   - The system should accept values within a reasonable range (e.g., 0 to 100000).

3. **Enter Invalid Consumption**
   - When the user enters an invalid annual consumption value (e.g., negative numbers, non-numeric characters), an error message should be displayed.
   - The input should be rejected or corrected based on validation rules.

4. **Handle Edge Cases**
   - The input field should handle edge cases such as very large numbers or special characters gracefully.
   - The system should not crash or behave unexpectedly for edge cases.

## Test Case
The test case for this user story is located in the file `tests/test_cases/enter-annual-consumption.spec.ts`.

### Test Scenarios
1. **Verify Initial Input Value**
   - Navigate to the page.
   - Verify that the annual consumption input field is pre-filled with the value "2300".

2. **Enter Valid Consumption**
   - Enter a valid annual consumption value (e.g., "5000").
   - Verify that the value is accepted and displayed correctly.

3. **Enter Invalid Consumption**
   - Enter an invalid annual consumption value (e.g., "-100").
   - Verify that an error message is displayed.
   - Enter a non-numeric value (e.g., "abc").
   - Verify that an error message is displayed.

4. **Handle Edge Cases**
   - Enter very large numbers (e.g., "1000000").
   - Verify that the input is accepted or handled appropriately.
   - Enter special characters (e.g., "#$%").
   - Verify that the input is rejected or an error message is displayed.
