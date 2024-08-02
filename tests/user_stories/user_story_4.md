# User Story 4: Manage Promotional Rate with Checkboxes

## Description
As a user, I want to be able to select options using checkboxes so that I can apply the tariff.

## Acceptance Criteria

1. **Initial State**
-  All checkboxes should be visible and deselected by default.
-  The default visible tariffs should be "OPTIMA Entspannt Unser Standardtarif" and "OPTIMA Aktiv 
Unser flexibler Tarif".
-  The page should load with the following promotional rate options displayed as checkboxes:
   - Nur mit Preisgarantie
   - Nur Strom aus erneuerbarer Energie
   - Nur ohne Bindung

2. **Select checkbox**
   - The checkbox color should change to indicate that it is selected.

3. **Deselect checkbox**
   - The checkbox color should revert to its default state, indicating that it is not selected.

4. **Checkbox State Persistence**
   - The state of the checkboxes should persist even if the page is refreshed within the same session.
   - After the page reloads, previously selected or deselected checkboxes should maintain their state.

5. **Form Submission Without Postleitzahl**
   - **Submit Without Postleitzahl:** Select one or more checkboxes, leave the "Postleitzahl" field empty, and click submit. Verify that:
     - An error message is displayed indicating that the "Postleitzahl" field is required.
     - No corrisponding tariff cards are processed.

## Test Case
The test case for this user story is located in the file `tests\test_cases\checkbox.spec.ts`.

### Test Scenarios

1. **Verify Initial State**
   - Check the initial state of the checkboxes and visible tariffs upon loading the page.

2. **Checkbox Selection and Deselection**
   - **Select Checkbox:** Click on a checkbox to select it and verify that:
     - The checkbox changes color or shows a checkmark to indicate it is selected.
   - **Deselect Checkbox:** Click on the selected checkbox to deselect it and verify that:
     - The checkbox reverts to its default state, removing the color change or checkmark to indicate it is deselected.

3. **Display and Removal of Tariff Card**
   - Select a checkbox and verify that tariff card corresponding should be displayed correctly.
   - Deselect the checkbox and verify that the tarif card is no longer visible.

4. **Checkbox State Persistence After Refresh**
   - Select and deselect checkboxes, refresh the page, and verify that the checkbox states persist as expected.

5. **Form Submission Without Postleitzahl**
   - **Submit Without Postleitzahl:** Select one or more checkboxes without entering a value in the "Postleitzahl" field, submit the form, and verify that:
     - An appropriate error message is displayed.
     - The form does not process the correct tariff cards.