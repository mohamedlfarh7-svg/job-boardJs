export function renderOffers(offers) {
  const listings = document.getElementById('listings');
  
  console.log("Offres reçues dans render:", offers);

  listings.innerHTML = '';

  if (!offers || offers.length === 0) {
    listings.innerHTML = '<p class="no-results">Aucune offre trouvée.</p>';
    return;
  }

  const cardsHTML = offers.map(offer => {
    const techTags = Array.isArray(offer.technologies) 
      ? offer.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('') 
      : '';

    return `
      <article class="job-card" data-id="${offer.id}">
        <div class="card-top">
          <span class="tag ${offer.typeContrat ? offer.typeContrat.toLowerCase() : ''}">${offer.typeContrat}</span>
          <button class="star-btn">☆</button>
        </div>
        <h3 class="job-title">${offer.titre}</h3>
        <p class="job-company">${offer.entreprise} - ${offer.ville}</p>
        <p class="job-desc">${offer.descriptionCourte || ''}</p>
        <div class="skill-tags">
          ${techTags}
        </div>
        <div class="card-bottom">
          <span class="job-date">${offer.datePublication}</span>
          <a href="offre-detail.html?id=${offer.id}" class="job-link">Voir l'offre →</a>
        </div>
      </article>
    `;
  }).join('');

  listings.innerHTML = cardsHTML;
}