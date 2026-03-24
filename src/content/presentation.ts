import type { ContentItem } from '../types';

const loremA =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed est a lorem lacinia convallis. Nunc in ligula ut lectus feugiat iaculis.';
const loremB =
  'Praesent facilisis, nibh id volutpat consequat, justo tortor bibendum magna, et hendrerit odio dolor vitae erat. Curabitur tempus sem ut semper aliquet.';

export const presentationContent: ContentItem[] = [
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

    flow: [
      {
        type: 'text',
        heading: 'Bloc 1 — Texte',
        paragraphs: [
          'Ici vous pouvez écrire un premier bloc texte libre.',
          'Ensuite vous pouvez enchaîner avec des tableaux puis des onglets.'
        ]
      },
      {
        type: 'table',
        heading: 'Bloc 2 — Plusieurs tableaux',
        tables: [
          {
            title: 'Tableau 1',
            rows: [
              { label: 'Champ 1', value: 'Valeur 1' },
              { label: 'Champ 2', value: 'Valeur 2' }
            ]
          },
          {
            title: 'Tableau 2',
            rows: [
              { label: 'Champ 3', value: 'Valeur 3' },
              { label: 'Champ 4', value: 'Valeur 4' }
            ]
          }
        ]
      },
      {
        type: 'tabs',
        heading: 'Bloc 3 — Onglets personnalisés',
        tabs: [
          {
            label: 'Onglet A',
            paragraphs: ['Contenu de longlet A']
          },
          {
            label: 'Onglet B',
            paragraphs: ['Contenu de longlet B'],
            tables: [
              {
                title: 'Tableau dans onglet B',
                rows: [{ label: 'B1', value: 'Valeur B1' }]
              }
            ]
          }
        ]
      },
      {
        type: 'text',
        heading: 'Bloc 4 — Encore du texte',
        paragraphs: ['Puis encore un bloc texte à la suite.']
      }
    ],

    blocks: [
      {
        heading: 'Sous-section 1 — Organisation',
        paragraphs: [
          'Ici vous pouvez écrire un texte long spécifique à cette sous-section.',
          'Ajoutez autant de paragraphes que nécessaire.'
        ],
        tables: [
          {
            title: 'Tableau A — Informations clés',
            rows: [
              { label: 'Champ A1', value: 'Valeur A1' },
              { label: 'Champ A2', value: 'Valeur A2' }
            ]
          },
          {
            title: 'Tableau B — Données complémentaires',
            rows: [
              { label: 'Champ B1', value: 'Valeur B1' },
              { label: 'Champ B2', value: 'Valeur B2' }
            ]
          }
        ]
      },
      {
        heading: 'Sous-section 2 — Détails',
        paragraphs: [
          'Deuxième bloc avec son propre contenu.',
          'Vous pouvez aussi ne pas mettre de tableaux.'
        ]
      }
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
];
