# User Story 4: Manage Promotional Rate with Checkboxes

## Description
As a user, I want to be able to select promotional rates using checkboxes so that I can apply relevant discounts to my purchase.

## Acceptance Criteria

1. **Initial State**
   - The checkout page must load with the following promotional rate options displayed as checkboxes:
     - Nur mit Preisgarantie
     - Nur Strom aus erneuerbarer Energie
     - Nur ohne Bindung

2. **Select Promotional Rate**
   - When a checkbox is selected, the corresponding discount must be applied to the total price.

3. **Deselect Promotional Rate**
   - When a checkbox is deselected, the corresponding discount must be removed.

4. **Checkbox State Persistence**
   - The state of the checkboxes should persist during page reloads within the same session.

5. **Invalid Promotional Rate**
   - Expired or invalid promotional rates should be disabled with an appropriate tooltip or message.

6. **Error Handling**
   - An error message should be displayed if there is an issue applying a selected promotional rate.

### Test Scenarios

1. **Verify Initial Checkbox State**
   - Navigate to the checkout page.
   - Verify that the checkboxes for the promotional rates are displayed with appropriate labels.

2. **Select and Deselect Promotional Rates**
   - Select each promotional rate checkbox and verify that the total price updates.
   - Deselect the checkbox and verify that the total price updates accordingly.

3. **Invalid Promotional Rate**
   - Check that expired or invalid promotional rate options are disabled and display a tooltip or message.

4. **Handle Errors**
   - Simulate an error when applying a promotional rate and verify that an error message is shown.