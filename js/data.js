export async function getData() {
    const response = await fetch('./data/offres.json');

    const offers = await response.json();

    return offers;
}