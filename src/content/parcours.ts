import type { ContentItem } from '../types';

const loremA =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est a lorem lacinia convallis. Nunc in ligula ut lectus feugiat iaculis.';
const loremB =
  'Praesent facilisis, nibh id volutpat consequat, justo tortor bibendum magna, et hendrerit odio dolor vitae erat. Curabitur tempus sem ut semper aliquet.';

export const parcoursContent: ContentItem[] = [
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
];
