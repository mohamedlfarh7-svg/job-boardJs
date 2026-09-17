export function getFilterCriteria() {
  const searchInput = document.getElementById('search-input');
  const typeSelect = document.getElementById('type-select');
  const villeSelect = document.getElementById('ville-select');
  const techSelect = document.getElementById('tech-select');

  return {
    search: searchInput ? searchInput.value : '',
    typeContrat: typeSelect ? typeSelect.value : '',
    ville: villeSelect ? villeSelect.value : '',
    tech: techSelect ? techSelect.value : ''
  };
}
export function filterAndSortOffres(offres) {
  const criteria = getFilterCriteria();

  return offres.filter(offre => {
    const matchTech = !criteria.tech || (
      offre.technologies && offre.technologies.includes(criteria.tech)
    );

    const matchVille = !criteria.ville || offre.ville === criteria.ville;

    const matchType = !criteria.typeContrat || offre.typeContrat === criteria.typeContrat;

    const search = criteria.search ? criteria.search.toLowerCase() : '';
    const descriptionText = (offre.description || offre.descriptionCourte || '').toLowerCase();
    
    const matchSearch = !criteria.search || 
      offre.titre.toLowerCase().includes(search) || 
      offre.entreprise.toLowerCase().includes(search) ||
      descriptionText.includes(search);

    return matchTech && matchVille && matchType && matchSearch;
  }).sort((a, b) => new Date(b.datePublication) - new Date(a.datePublication));
}

export function bindFilterEvents(callback) {
  const filterIds = ['search-input', 'type-select', 'ville-select', 'tech-select'];
  
  filterIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const eventType = el.tagName === 'INPUT' ? 'input' : 'change';
      el.addEventListener(eventType, callback);
    }
  });
}