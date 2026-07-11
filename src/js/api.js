const BASE = 'https://countries.dev/v2';

export async function getAllCountries(){

    const res = await fetch(`${BASE}/countries`);
    if (!res.ok) throw new Error('Failed to fetch country name');
    return res.json();
}