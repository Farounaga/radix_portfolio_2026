import type { ContentItem, MainPage, RouteKey } from '../types';

const loremA =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est a lorem lacinia convallis. Nunc in ligula ut lectus feugiat iaculis.';
const loremB =
  'Praesent facilisis, nibh id volutpat consequat, justo tortor bibendum magna, et hendrerit odio dolor vitae erat. Curabitur tempus sem ut semper aliquet.';

export const contentItems: ContentItem[] = [
  {
    key: 'presentation-intro',
    section: 'presentation',
    title: 'Présentation',
    summary: 'Profil général et objectifs.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Nom', value: 'Vladimir Spirine' },
      { label: 'Rôle', value: 'Étudiant BTS SIO SLAM' },
    ],
  },
  {
    key: 'presentation-formation',
    section: 'presentation',
    title: 'Présentation de la formation',
    summary: 'Cadre et objectifs pédagogiques.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Formation', value: 'BTS SIO SLAM' },
      { label: 'Durée', value: '2 ans' },
    ],
  },
  {
    key: 'presentation-etablissement',
    section: 'presentation',
    title: "Presentation de l'établissement",
    summary: 'Contexte de l’établissement.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Campus', value: 'Ermitage' },
      { label: 'Ville', value: 'Agen' },
    ],
  },
  {
    key: 'presentation-entreprise',
    section: 'presentation',
    title: "Presentation de l'entreprise",
    summary: 'Environnement professionnel.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Entreprise', value: 'Syadem' },
      { label: 'Domaine', value: 'Santé / e-santé' },
    ],
  },
  {
    key: 'parcours-etudes',
    section: 'parcours',
    title: 'Parcours d’études',
    summary: 'Historique académique.',
    paragraphs: [loremA, loremB],
    table: [
      { label: '2024-2026', value: 'BTS SIO SLAM' },
      { label: '2016-2018', value: 'BTS Commerce International' },
    ],
  },
  {
    key: 'parcours-pro',
    section: 'parcours',
    title: 'Parcours Professionnel',
    summary: 'Expériences professionnelles.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Poste actuel', value: 'Support applicatif' },
      { label: 'Entreprise', value: 'Syadem' },
    ],
  },
  {
    key: 'parcours-competences',
    section: 'parcours',
    title: 'Compétences',
    summary: 'Compétences techniques et transversales.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Langages', value: 'Python, JS, SQL' },
      { label: 'Outils', value: 'Git, Linux, Docker' },
    ],
  },
  {
    key: 'parcours-certifications',
    section: 'parcours',
    title: 'Certifications & Récompenses',
    summary: 'Certificats et distinctions.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Cisco', value: 'Cybersecurity / Networking' },
      { label: 'Événement', value: 'REMPAR25' },
    ],
  },
  {
    key: 'realisations-e5e6',
    section: 'realisations',
    title: 'Dossiers E5 & E6',
    summary: 'Pièces et synthèses des dossiers.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Dossier', value: 'E5' },
      { label: 'Dossier', value: 'E6' },
    ],
  },
  {
    key: 'realisations-tickets',
    section: 'realisations',
    title: "Outil d'analyse de tickets",
    summary: 'Analyse, catégorisation et reporting.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Sources', value: 'Tickets support' },
      { label: 'Sorties', value: 'Stats / tendances' },
    ],
  },
  {
    key: 'realisations-projet2',
    section: 'realisations',
    title: 'Projet 2',
    summary: 'Espace pour projet complémentaire.',
    paragraphs: [loremA, loremB],
    table: [
      { label: 'Statut', value: 'À compléter' },
      { label: 'Type', value: 'Projet libre' },
    ],
  },
];

export const bySection = (section: MainPage) => contentItems.filter((x) => x.section === section);

export const byKey = (key: RouteKey) => contentItems.find((x) => x.key === key);
