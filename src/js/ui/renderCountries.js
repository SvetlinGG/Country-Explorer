

export function renderCountries(countries){
    const container = document.querySelector("#countries-container");

    if (!container){
        throw new Error('Countries container was not found')
    }
    container.innerHTML = "";

    countries.forEach(country => {
        const card = document.createElement("article");
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
renderCountries();