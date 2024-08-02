# Automated Tests for Online Tarifberater

## Overview

This repository hosts a suite of automated tests for the Online Tarifberater application from Wien Energie. The goal of these tests is to assess the functionality and reliability of the application through a range of scenarios. By simulating user interactions and validating expected outcomes, these tests help ensure that the application operates correctly and meets user expectations.

## Application Under Test

The tests are designed for the Online Tarifberater application, which can be accessed at:

[Online Tarifberater](https://www.wienenergie.at/privat/produkte/strom/)

## Testing Scope

The testing focuses on validating various aspects of the application, including:

- **Tariff Functionality**: Ensures that the application correctly handles and displays different tariff options.
- **Form Validation**: Checks for proper handling of form inputs, including required fields and error messages.
- **Error Scenarios**: Verifies that appropriate error messages are shown for invalid.
- **State Preservation**: Confirms that selected options and states are maintained even after page refreshes or interactions.

## Browsers Tested

Tests are executed across different browsers to ensure cross-browser compatibility:

- **Chromium**: Tests are run on the Chromium browser to verify functionality.
- **Firefox**: To ensure compatibility with another popular browser and to catch any browser-specific issues.

Testing across multiple browsers is crucial as it helps identify and address any browser-specific issues, ensuring a consistent user experience regardless of the browser used.

## Test Organization

- **Happy Path Tests**: Located in the `tests/happy_path` directory, these tests validate the most common and expected user flows through the application, ensuring that the primary use cases work seamlessly.

- **Test Cases**: Found in the `tests/test_cases` directory, these tests cover a variety of scenarios based on the application's functionality, checking various features and interactions.

- **User Stories**: Detailed acceptance criteria and test scenarios are documented in `tests/user_stories` files. These documents provide clarity on the expected behavior of the application and guide the creation of test cases.



