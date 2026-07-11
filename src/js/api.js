const BASE = 'https://countries.dev';

export async function getCountryName(){

    const res = await fetch(`${BASE}/name`);
    if (!res.ok) throw new Error('Failed to fetch country name');
    return res.json();
}