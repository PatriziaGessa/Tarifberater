import { test, expect } from "@playwright/test";

/**
 * Test Suite for Happy Path: "Nur ohne Bindung" Option
 *
 * This test suite verifies the happy path scenarios for selecting the "Nur ohne Bindung"
 * (No Binding) option in the tariff recommendation form. It covers the following scenarios:
 *
 * 1. Open web site
 * 2. Increment the Number of People
 * 3. Enter Valid Annual Consumption
 * 4. Enter Valid Zip Code
 * 5. Select Checkbox
 * 6. Submit the Form
 * 7. Verify the Display of Tariffs Without Binding
 *
 *  The suite includes three specific scenarios:
 * - Default number of people (2)
 * - Minimum number of people (1)
 * - Maximum number of people (5)
 *
 * Refer to the documentation in `happy-path-no-binding.md` for detailed acceptance criteria
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

test.describe("Nur ohne Bindung Option", () => {
  test("Verify display of tariffs with default number of people", async ({
    page,
  }) => {
    await page.getByLabel("Jahresverbrauch:").dblclick();

    // Fill in yearly consumption value and ZIP code
    await page.getByLabel("Jahresverbrauch:").fill("6000");
    await page.getByPlaceholder("z.B.").click();
    await page.getByPlaceholder("z.B.").fill("1030");

    // Select 'Nur ohne Bindung' option and click 'Tarife anzeigen' button
    await page
      .locator("label")
      .filter({ hasText: "Nur ohne Bindung" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Tarife anzeigen" }).click();

    // Verify that the expected tariffs are visible
    await expect(
      page.getByRole("heading", { name: "OPTIMA Entspannt", exact: true })
    ).toBeVisible();
    const priceElements = page.locator(".Content-module__content-U7Pyvt");
    await expect(priceElements.first()).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "OPTIMA Aktiv" })
    ).toBeVisible();
    const specificPriceElement = page.locator(
      ".Content-module__content-U7Pyvt.Content-module__md-EUWKkp.ProductCardPrice-module__price-BQEoDf"
    );
    await expect(specificPriceElement.first()).toBeVisible();
  });

  test("verify display tariffs when option is selected with 1 person", async ({
    page,
  }) => {
    // Set number of people to 1
    await page.getByLabel("Personen verringern").click(); // Assuming "Personen reduzieren" decreases the number of people
    1000; // Wait for 1 second

    // Set yearly consumption value and ZIP code
    await page.getByLabel("Jahresverbrauch:").dblclick();
    await page.getByLabel("Jahresverbrauch:").fill("3000"); // Example value
    await page.getByPlaceholder("z.B.").click();
    await page.getByPlaceholder("z.B.").fill("1030");

    // Select 'Nur ohne Bindung' option and click 'Tarife anzeigen' button
    await page
      .locator("label")
      .filter({ hasText: "Nur ohne Bindung" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Tarife anzeigen" }).click();

    // Verify that the expected tariffs are visible
    await expect(
      page.getByRole("heading", { name: "OPTIMA Entspannt", exact: true })
    ).toBeVisible();
    const priceElements = page.locator(".Content-module__content-U7Pyvt");
    await expect(priceElements.first()).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "OPTIMA Aktiv" })
    ).toBeVisible();
    const specificPriceElement = page.locator(
      ".Content-module__content-U7Pyvt.Content-module__md-EUWKkp.ProductCardPrice-module__price-BQEoDf"
    );
    await expect(specificPriceElement.first()).toBeVisible();
  });

  test("verify display tariffs when option is selected with maximum number of people ", async ({
    page,
  }) => {
    // Increment number people
    await page.getByLabel("Personen erhöhen").click();
    await page.getByLabel("Personen erhöhen").click();
    await page.getByLabel("Personen erhöhen").click();

    await page.getByLabel("Jahresverbrauch:").dblclick();
    // Fill in yearly consumption value and ZIP code
    await page.getByLabel("Jahresverbrauch:").fill("5000");
    await page.getByPlaceholder("z.B.").click();
    await page.getByPlaceholder("z.B.").fill("1030");

    // Select 'Nur ohne Bindung' option and click 'Tarife anzeigen' button
    await page
      .locator("label")
      .filter({ hasText: "Nur ohne Bindung" })
      .locator("div")
      .first()
      .click();
    await page.getByRole("button", { name: "Tarife anzeigen" }).click();

    // Verify that the expected tariffs are visible
    await expect(
      page.getByRole("heading", { name: "OPTIMA Entspannt", exact: true })
    ).toBeVisible();
    const priceElements = page.locator(".Content-module__content-U7Pyvt");
    await expect(priceElements.first()).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "OPTIMA Aktiv" })
    ).toBeVisible();
    const specificPriceElement = page.locator(
      ".Content-module__content-U7Pyvt.Content-module__md-EUWKkp.ProductCardPrice-module__price-BQEoDf"
    );
    await expect(specificPriceElement.first()).toBeVisible();
  });
});
