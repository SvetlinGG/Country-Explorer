
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
    const container = document.querySelector("#countries-container");
    container.innerHTML = "";

    countries.forEach(country => {
        const card = document.createElement("div");
        card.className = "country-card";
        card.innerHTML = `
            <img src="${country.flags.png}" alt="${country.name.common} flag" />
                <h3>${country.name.common}</h3>
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> ${country.region}</p>
            
        `;
        container.appendChild(card)
    })
}

fetchCountries();