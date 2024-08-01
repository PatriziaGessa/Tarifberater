# User Story 3: Enter ZIP Code - Postleitzahl

## Description
As a user, I want to be able to enter my ZIP code into the input field, 
so that the system can provide location-specific offers.

## Acceptance Criteria
1. **Initial State**
   - The page should load with an empty ZIP code input field.

2. **Enter Valid ZIP Code**
   - When the user enters a valid ZIP code, the value should be accepted without error.
   - The system should accept a standard 4-digit ZIP code format.

3. **Enter Invalid ZIP Code**
   - When the user enters an invalid ZIP code (less than 4 digits, more than 4 digits), an error message should be displayed.
   - The input should be rejected or corrected based on validation rules.

4. **Handle Edge Cases**
   - The input field should handle edge cases such as very large or short numbers.
   - The system should not crash or behave unexpectedly for edge cases.

## Test Case
The test case for this user story is located in the file `tests/test_cases/enter-zip-code.spec.ts`.

## Test Scenarios

1. **Verify Initial Input Value**
   - Navigate to the page.
   - Verify that the ZIP code input field is empty.

2. **Enter Valid ZIP Code**
   - Enter a valid ZIP code.
   - Verify that the value is accepted and displayed correctly.

3. **Enter Invalid ZIP Code (Too Short)**
   - Enter a short ZIP code.
   - Verify that an error message is displayed, indicating that the input is invalid.

4. **Enter Invalid ZIP Code (Too Long)**
   - Input a ZIP code with more than 4 digits.
   - Verify that an error message is displayed, indicating that the input is invalid.  

5. **Re-enter Correct Value After Error**
   - Enter an invalid ZIP code.
   - Verify that an error message is displayed, indicating that the input is invalid.
   - Modify the ZIP code to a valid format.
   - Verify that the system accepts the corrected ZIP code without error and displays the new value correctly.   


