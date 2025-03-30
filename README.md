# Country and Currency Information App

This web application allows users to search for countries based on a spoken language and displays the countries and their corresponding currency exchange rates relative to USD.

## Features

-   **Language-based Country Search:** Users can enter a language in the search bar.
-   **Country and Region Display:** The application fetches and displays a list of countries that speak the entered language, along with their respective regions.
-   **Currency Exchange Rates:** The application retrieves and displays the exchange rates for the currencies of the found countries, relative to USD.

## Technologies Used

-   **HTML:** For the structure of the web page.
-   **JavaScript:** For the application logic and API interactions.
-   **Fetch API:** For making asynchronous requests to the RestCountries and ExchangeRate-API.
-   **RestCountries API:** (`https://restcountries.com/v3.1/lang/{language}`) for retrieving country information.
-   **ExchangeRate-API:** (`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD`) for retrieving currency exchange rates. **Note:** You need to replace `YOUR_API_KEY` with your actual API key.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone [repository_url]
    cd [repository_directory]
    ```
2.  **Obtain an API key from ExchangeRate-API:**
    -   Sign up for a free or paid plan at [ExchangeRate-API](https://www.exchangerate-api.com/).
    -   Replace `YOUR_API_KEY` in the JavaScript code with your obtained API key.
3.  **Open `index.html` in your web browser:**
    -   Double-click the `index.html` file or open it using "Open with" in your browser.

## Usage

1.  Open the `index.html` file in your web browser.
2.  Enter a language in the search bar.
3.  Click the "Submit" button.
4.  The application will display a list of countries that speak the entered language and their corresponding currency exchange rates relative to USD.

## Code Explanation

### HTML Structure

The HTML structure includes:

-   A search input field for entering the language.
-   A submit button to trigger the search.
-   Two unordered lists (`ul`) to display the countries and currencies.

### JavaScript Logic

1.  **Event Listener:** An event listener is attached to the submit button. When clicked, it retrieves the search value (language) and calls the `currency()` function.
2.  **`getContinent(language)` Function:**
    -   Fetches country data from the RestCountries API based on the provided language.
    -   Creates list items (`li`) for each country, displaying the country name and region.
    -   Extracts the currency codes for each country.
    -   Returns an array of currency codes.
3.  **`currency(language)` Function:**
    -   Calls `getContinent(language)` to get the currency codes.
    -   Fetches currency exchange rates from the ExchangeRate-API (USD as the base currency).
    -   Creates list items (`li`) for each currency, displaying the exchange rate relative to 1 USD.
    -   Handles potential errors during API requests.

### API Usage

-   **RestCountries API:** Used to retrieve country information based on language.
-   **ExchangeRate-API:** Used to retrieve currency exchange rates. **Important:** Requires a valid API key.

## Error Handling

-   The application includes `try...catch` blocks to handle potential errors during API requests.
-   Error messages are logged to the console.

## Notes

-   Replace `YOUR_API_KEY` with your actual API key from ExchangeRate-API.
-   Ensure that the RestCountries and ExchangeRate-API are accessible.
-   The application assumes that each country has at least one currency.
-   The exchange rates are based on USD as the base currency.