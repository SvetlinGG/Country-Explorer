const DATA_COUNTRIES = "/public/data/countries.json";

export async function fetchAllCountries() {
    const response = await fetch(DATA_COUNTRIES);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.json();
}