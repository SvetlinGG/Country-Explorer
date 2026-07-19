
const API_URL = "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags";

async function fetchCountries(){
    try {
        const response = await fetch(API_URL);

        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }

        const countries = await response.json();
        renderCountries(countries);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

function renderCountries(countries){
    
}