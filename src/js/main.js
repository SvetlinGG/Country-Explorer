import { initButtons } from './components/buttons.js';
import { fetchAllCountries} from './api.js';
import { renderCountries } from './ui/renderCountries.js'


async function initApp(){
    initButton();

    try {
        const countries = await fetchAllCountries();
        renderCountries(countries)
    } catch (error) {
        console.error('Application error:', error)
    }
}
initApp()
