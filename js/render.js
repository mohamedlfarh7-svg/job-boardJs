 export function renderOffers(offers) {

    const listings = document.getElementById('listings');

    // console.log(offers)

    offers.forEach(offer => {

        listings.innerHTML += `
      <article class="job-card">
            <div class="card-top">
                <span class="tag stage">${offer.typeContrat}</span>
                <button class="star-btn">☆</button>
            </div>
            <h3 class="job-title">${offer.titre}</h3>
            <p class="job-company">${offer.ville}</p>
            <p class="job-desc">${offer.description}</p>
            <div class="skill-tags">
                ${offer.technologies.map(tech => 
                   ` 
                   <span class="skill-tag"> ${tech} </span>
                   `
                )}
            </div>
            <div class="card-bottom">
                <span class="job-date">${offer.datePublication}</span>
                <a href="../offre-detail.html?id=${offer.id}" class="job-link">Voir l'offre →</a>
            </div>
        </article>
    `
    });


}

function renderOfferDetail(offer) {
    const URL = new URLSearchParams(window.location.search);
    const  id = URL.get('id');

    console.log(id)
}
