import { test, expect } from "@playwright/test";

/**
 * Test Suite for  User Story 4: Checkbox Options
 *
 * This test suite verifies that the state of the promotional checkboxes
 * persists even after a page refresh. It covers the following scenarios:
 *
 * 1. Verify Initial Checkbox State
 * 2. Verify Select and Delect Checkbox
 * 3. Select Checkboxes, Submit Form, and Verify Tariff Cards
 * 4. Refresh Page and Verify Checkbox State
 * 5. Checkbox Selection without Postleitzahl and Submission
 *
 * Refer to the documentation in `tests\user_stories\user_story_4.md` for detailed acceptance criteria
 * and test scenarios.
 */

// Test setup to navigate to the page and accept cookies
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.wienenergie.at/privat/produkte/strom/");
  await page.getByRole("button", { name: "Auswahl akzeptieren" }).click();
});

// Cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close();
});

// Configure the test to run with the browser visible (headless: false) and slow down each action by 600ms
// This setup is useful for demonstrations or debugging, allowing the user to see interactions in real-time.
test.use({
  launchOptions: {
    headless: false, // Run browser in headful mode (visible)
    slowMo: 600, // Slow down each operation by 600 milliseconds for better visibility
  },
});

test.describe("User Story 4: Manage Promotional Rate with Checkboxes", () => {
  test("Verify Initial Checkbox State", async ({ page }) => {
    // Locate the checkbox for 'Nur mit preisgarantie' and verify it is visible
    const preisgarantieCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur mit preisgarantie" })
      .locator("div")
      .first();
    await expect(preisgarantieCheckbox).toBeVisible();
    // Verify that the checkbox is initially unchecked
    await expect(preisgarantieCheckbox).not.toHaveClass(/checked/);

    // Locate the checkbox for 'Nur Strom aus erneuerbarer' and verify it is visible
    const renewableEnergyCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur Strom aus erneuerbarer" })
      .locator("div")
      .first();
    await expect(renewableEnergyCheckbox).toBeVisible();
    // Verify that the checkbox is initially unchecked
    await expect(renewableEnergyCheckbox).not.toHaveClass(/checked/);

    // Locate the checkbox for 'Nur ohne Bindung' and verify it is visible
    const noBindingCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur ohne Bindung" })
      .locator("div")
      .first();
    await expect(noBindingCheckbox).toBeVisible();
    // Verify that the checkbox is initially unchecked
    await expect(noBindingCheckbox).not.toHaveClass(/checked/);
  });

  test("Verify Select and Delect Checkbox", async ({ page }) => {
    // Locate the checkbox for 'Nur mit preisgarantie' and verify it is visible
    const preisgarantieCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur mit preisgarantie" })
      .locator("div")
      .first();
    const renewableEnergyCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur Strom aus erneuerbarer" })
      .locator("div")
      .first();
    const noBindingCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur ohne Bindung" })
      .locator("div")
      .first();

    //Verify select checkboxes
    await preisgarantieCheckbox.click(); //preisgarantieCheckbox
    await expect(preisgarantieCheckbox).toBeChecked();
    await renewableEnergyCheckbox.click(); //renewableEnergyCheckbox
    await expect(renewableEnergyCheckbox).toBeChecked();
    await noBindingCheckbox.click();
    await expect(noBindingCheckbox).toBeChecked();

    // Verify deselected boxes

    await preisgarantieCheckbox.click(); //preisgarantieCheckbox
    await expect(preisgarantieCheckbox).not.toBeChecked();
    await renewableEnergyCheckbox.click(); //renewableEnergyCheckbox
    await expect(renewableEnergyCheckbox).not.toBeChecked();
    await noBindingCheckbox.click(); //noBindingCheckbox
    await expect(noBindingCheckbox).not.toBeChecked();
  });

  test('Verify Tariff Cards after Selecet "Nur mit preisgarantie" and Submit', async ({
    page,
  }) => {
    // Locate the checkbox for 'Nur mit preisgarantie' and verify it is visible
    const preisgarantieCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur mit preisgarantie" })
      .locator("div")
      .first();
    await page.getByPlaceholder("z.B.").click();
    await page.getByPlaceholder("z.B.").fill("1030");
    await preisgarantieCheckbox.click(); //preisgarantieCheckbo
    await page.getByRole("button", { name: "Tarife anzeigen" }).click();
    await expect(
      page.getByRole("heading", { name: "OPTIMA Entspannt", exact: true })
    ).toBeVisible();
  });

  test('Verify Tariff Cards after Selecet "Nur Strom aus erneuerbarer Energie" and Submit', async ({
    page,
  }) => {
    // Locate the checkbox for 'Nur mit renewableEnergyCheckbox' and verify it is visible
    const renewableEnergyCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur Strom aus erneuerbarer Energie" })
      .locator("div")
      .first();
    await page.getByPlaceholder("z.B.").click();
    await page.getByPlaceholder("z.B.").fill("1030");
    await renewableEnergyCheckbox.click(); //renewableEnergyCheckbox
    await page.getByRole("button", { name: "Tarife anzeigen" }).click();
    await expect(
      page.getByRole("heading", { name: "OPTIMA Entspannt", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "OPTIMA Aktiv", exact: true })
    ).toBeVisible();
  });

  test('Verify Tariff Cards after Selecet "Nur ohne Bindung" and Submit', async ({
    page,
  }) => {
    // Locate the checkbox for 'Nur mit ohne BindungCheckbox' and verify it is visible
    const ohneBindungCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur ohne Bindung" })
      .locator("div")
      .first();
    await page.getByPlaceholder("z.B.").click();
    await page.getByPlaceholder("z.B.").fill("1030");
    await ohneBindungCheckbox.click(); //ohne BindungCheckbox
    await page.getByRole("button", { name: "Tarife anzeigen" }).click();
    await expect(
      page.getByRole("heading", { name: "OPTIMA Entspannt", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "OPTIMA Aktiv", exact: true })
    ).toBeVisible();
  });

  test("Refresh Page and Verify Checkbox State", async ({ page }) => {
    // Locate checkboxes
    const preisgarantieCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur mit preisgarantie" })
      .locator("div")
      .first();
    const renewableEnergyCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur Strom aus erneuerbarer" })
      .locator("div")
      .first();
    const noBindingCheckbox = page
      .locator("label")
      .filter({ hasText: "Nur ohne Bindung" })
      .locator("div")
      .first();
    // Click on each checkbox
    await page
      .locator("label")
      .filter({ hasText: "Nur mit Preisgarantie" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("label")
      .filter({ hasText: "Nur Strom aus erneuerbarer" })
      .locator("div")
      .first()
      .click();
    await page
      .locator("label")
      .filter({ hasText: "Nur ohne Bindung" })
      .locator("div")
      .first()
      .click();
    await page.reload(); // Refresh the page

    // Verify that the checkboxes are still checked
    await expect(preisgarantieCheckbox).toBeChecked(); //preisgarantieCheckbox
    await expect(renewableEnergyCheckbox).toBeChecked(); //renewableEnergyCheckbox
    await expect(noBindingCheckbox).toBeChecked(); //noBindingCheckbox
  });

  test("Submit with empty Postleitzahl field", async ({ page }) => {
    // Select the "Nur mit Preisgarantie" checkbox
    await page
      .locator("label")
      .filter({ hasText: "Nur mit Preisgarantie" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Tarife anzeigen" }).click(); // Click the submit button
    await expect(page.getByText("Bitte geben Sie eine gültige")).toBeVisible(); // Verify the error message is visible
  });

  test("Verify error message is not more visible ", async ({ page }) => {
    // Select the "Nur mit Preisgarantie" checkbox
    await page
      .locator("label")
      .filter({ hasText: "Nur mit Preisgarantie" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Tarife anzeigen" }).click(); // Click the submit button
    await expect(page.getByText("Bitte geben Sie eine gültige")).toBeVisible(); // Verify the error message is visible

    // Enter a valid ZIP code
    await page.getByPlaceholder("z.B.").click();
    await page.getByPlaceholder("z.B.").fill("1030");
    await page.getByRole("button", { name: "Tarife anzeigen" }).click(); // Click the submit button again
    await expect(
      page.getByText("Bitte geben Sie eine gültige")
    ).not.toBeVisible(); // Verify the error message is no longer visible
    await expect(
      page.getByRole("heading", { name: "OPTIMA Entspannt", exact: true })
    ).toBeVisible(); // Verify the tariff is visible
  });
});
