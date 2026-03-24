import type { ContentItem } from '../types';

const loremA =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est a lorem lacinia convallis. Nunc in ligula ut lectus feugiat iaculis.';
const loremB =
  'Praesent facilisis, nibh id volutpat consequat, justo tortor bibendum magna, et hendrerit odio dolor vitae erat. Curabitur tempus sem ut semper aliquet.';

export const realisationsContent: ContentItem[] = [
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
