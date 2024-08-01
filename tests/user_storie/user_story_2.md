# User Story 2: Enter Annual Consumption

## Description
As a user, I want to be able to enter my annual consumption value into the input field, so that the system can process my input and provide appropriate offers.

## Acceptance Criteria
1. **Initial State**
   - The page should load with a pre-filled annual consumption input field.

2. **Enter Valid Consumption**
   - When the user enters a valid annual consumption value (numeric), the value should be accepted without error.
   - The system should accept values within a reasonable range.

3. **Enter Invalid Consumption**
   - When the user enters an invalid annual consumption value (e.g., negative numbers), an error message should be displayed.
   - The input should be rejected or corrected based on validation rules.

4. **Handle Edge Cases**
   - The input field should handle edge cases such as very large numbers or special characters gracefully.
   - The system should not crash or behave unexpectedly for edge cases.

## Test Case
The test case for this user story is located in the file `tests/test_cases/enter-annual-consumption.spec.ts`.

## Test Scenarios

1. **Verify Initial Input Value**
   - Navigate to the page.
   - Verify that the annual consumption input field is visible.
   - Verify that the annual consumption input field is pre-filled with the value "2300".

2. **Enter Valid Consumption**
   - Enter a valid annual consumption value.
   - Verify that the value is accepted and displayed correctly.

3. **Enter Invalid Consumption (Negative Number)**
   - Enter a negative annual consumption value.
   - Verify that an error message is displayed, indicating that the input is invalid.

4. **Re-enter Correct Value After Error**
   - Enter an invalid annual consumption value and verify that the error message is shown.
   - Correct the value to a valid number
   - Verify that the valid input is accepted and the error message is no longer displayed.