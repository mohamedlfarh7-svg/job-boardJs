export async function fetchOffres() {
    try{
       const response = await fetch('./data/offres.json');
       const data = await response.json();
       return data
    }catch(error){
        console.error("Erreur lors du chargement des offres:", error);
        return [];
    }
    
}
export async function getData() {
    const response = await fetch('./data/offres.json');

    const offers = await response.json();

    return offers;
}
