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

    // "entreprise": "Acme Corp",
    // "titre": "Développeur React",
    // "ville": "Paris",
    // "typeContrat": "Stage",
    // "technologies": [
    //   "React",
    //   "Node.js",
    //   "MongoDB"
    // ],
    // "description": "Développement de nouvelles fonctionnalités pour notre plateforme SaaS, en binôme avec l'équipe front-end.",
    // "profil": "Étudiant en formation MERN, à l'aise avec JavaScript moderne (ES6+) et Git.",
    // "contact": "recrutement@acmecorp.com",
    // "datePublication": "2026-09-10",
    // "suivie": false

export function renderOfferDetail(offer) {
    const offerDetail = document.getElementById('offer-detail');
 console.log(offer)
    offerDetail.innerHTML = `
      <section class="offer-hero">
      <div>
        <div class="offer-hero-meta">
          <span class="tag stage">${offer.typeContrat}</span>
          <span>07 sept. 2026</span>
        </div>
        <h1>Stage Full-stack Next.js</h1>
        <p class="company">Koala Studio • Bordeaux</p>
      </div>
      <button class="follow-btn">☆ Suivre</button>
    </section>

    <div class="content-grid">
      <div class="stack">
        <div class="panel">
          <h2>Mission</h2>
          <p>Koala Studio développe des outils pour le secteur éducatif. Vous contribuez à un projet Next.js avec authentification, gestion de contenu et API Node.js. Petite équipe, vrai impact.</p>
        </div>
        <div class="panel">
          <h2>Profil recherché</h2>
          <p>Maîtrise de React, bases de Next.js. Curieux, autonome, bon communicant.</p>
        </div>
      </div>

      <div class="stack">
        <div class="panel">
          <h2>Technologies</h2>
          <div class="skill-tags">
            <span class="skill-tag">Next.js</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">TypeScript</span>
          </div>
        </div>

        <div class="panel">
          <h2>Entreprise</h2>
          <p class="company-name">Koala Studio</p>
          <p class="company-tagline">Studio web créatif &amp; développement sur mesure.</p>
          <a href="#" class="company-link">koala.studio ↗</a>
        </div>

        <div class="panel candidature-panel">
          <h2>Candidature</h2>
          <a href="mailto:hello@koala.studio">hello@koala.studio</a>
        </div>
      </div>
    </div>
    `
}
