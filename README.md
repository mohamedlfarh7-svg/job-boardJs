# Portail Stages & Alternances

## Description

Portail web interne permettant de centraliser les offres de stages et d'alternances pour les apprenants.

L'objectif est de faciliter la consultation des offres, la recherche, le filtrage, l'accès aux détails d'une offre et le suivi des opportunités intéressantes.

Ce projet est réalisé dans le cadre de la formation **Développeur MERN 2026/2027**.

---

## Objectifs

Le portail permet de :

* consulter une liste d'offres ;
* rechercher une offre par mot-clé ;
* filtrer les offres par ville, technologie et type de contrat ;
* trier les offres par date de publication ;
* consulter le détail d'une offre ;
* suivre des offres ;
* déposer une offre ;
* prévoir une interface d'administration des offres.

---

## Utilisateurs

### Apprenant

L'apprenant peut :

* consulter les offres ;
* rechercher et filtrer les offres ;
* consulter le détail d'une offre ;
* suivre ou retirer une offre suivie.

### Visiteur

Le visiteur peut consulter les offres publiques.

### Administrateur

L'administrateur peut :

* consulter les offres ;
* créer une offre ;
* modifier une offre ;
* supprimer une offre ;
* associer des technologies aux offres.

---

## Pages prévues

### Pages principales

* `index.html` — Liste des offres
* `offre-detail.html` — Détail d'une offre
* `deposer-offre.html` — Dépôt d'une offre
* `offres-suivies.html` — Offres suivies

### Administration

Une interface d'administration est prévue dans la conception du produit pour permettre la gestion des offres.

---

## Structure du projet

```text
job-board/
│
├── index.html
├── offre-detail.html
├── deposer-offre.html
├── offres-suivies.html
│
├── assets/
│   └── images/
│
├── css/
│   └── style.css
│
├── docs/
│   ├── analyse-cahier-des-charges.md
│   ├── jira-export.md
│   └── figma-link.md
│
└── README.md
```

---

## Conception

Les maquettes du portail sont réalisées avec **Figma**.

Les écrans prévus comprennent :

* liste des offres ;
* détail d'une offre ;
* dépôt d'une offre ;
* offres suivies ;
* administration des offres ;
* versions desktop et mobile ;
* composants réutilisables.

### Figma

Lien vers la maquette :

https://www.figma.com/design/5ETwMnUKqQr5G0h5Rgz70i/Untitled?node-id=19-794&m=dev&t=MXrSpfF6Mk7H6gwT-1

---

## Gestion du projet

Le projet est organisé avec **Jira**.

Le backlog contient notamment :

* Epics ;
* User Stories ;
* critères d'acceptation ;
* tâches techniques ;
* statuts.

### Jira

Lien vers le projet Jira :

https://outergamoustafa-1764845699446.atlassian.net/jira/software/projects/PJB/boards/368?filter=&groupBy=none

---

## Technologies

Pour cette première version :

* HTML5
* CSS3
* Responsive Design
* Git
* GitHub

JavaScript dynamique et les fonctionnalités backend seront développés dans les briefs suivants.

---

## Responsive Design

L'interface est conçue pour être utilisable sur :

*  Mobile
*  Tablette
*  Desktop

L'objectif est de conserver une interface claire, lisible et cohérente sur les différentes tailles d'écran.

---

## Hors périmètre

Cette première version n'intègre pas :

* authentification ;
* création de compte ;
* gestion de mot de passe ;
* rôles et permissions avancés ;
* backend ;
* base de données ;
* API REST ;
* candidature en ligne complète ;
* upload de CV ;
* envoi automatique d'emails ;
* messagerie ;
* paiement ;
* statistiques avancées ;
* moteur de recommandation ;
* espace entreprise complet.

---

## Évolution prévue

Les prochaines versions pourront intégrer :

* JavaScript dynamique ;
* gestion des filtres ;
* recherche dynamique ;
* gestion des offres suivies ;
* backend Express/EJS/MySQL ;
* gestion complète des offres ;
* administration des offres.

