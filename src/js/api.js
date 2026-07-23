const API_KEY = 'rc_live_c41c0fb510224d488886aaa50fca0e14';
const BASE_URL = "https://api.restcountries.com/countries/v5";

export async function fetchAllCountries() {
    const response = await fetch(BASE_URL, {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  }
});
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.json();

    const data = await response.json();
    console.log(data);
}