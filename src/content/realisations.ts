import type { ContentItem } from '../types';

export const realisationsContent: ContentItem[] = [
  {
    key: 'realisations-e5e6',
    section: 'realisations',
    title: 'Dossiers E5 & E6',
    summary: 'Documents officiels des épreuves E5 et E6, consultables et téléchargeables.',
    paragraphs: [
      "Cette section regroupe mes documents officiels pour les épreuves E5 et E6 du BTS SIO.",
      "Les dossiers sont disponibles en plusieurs formats afin de permettre une consultation directe dans le navigateur ou un téléchargement selon le besoin."
    ],
    table: [
      { label: 'Épreuves', value: 'E5 et E6' },
      { label: 'Formats', value: 'PDF et Excel' },
    ],
    flow: [
      {
        type: 'tabs',
        heading: 'Documents disponibles',
        tabs: [
          {
            label: 'E5',
            paragraphs: [
              "Le dossier E5 correspond à l’épreuve de conception et développement.",
              "Il est prévu pour être consulté en PDF ou en Excel, directement depuis le site."
            ],
            tables: [
              {
                title: 'Dossier E5',
                rows: [
                  { label: 'Type', value: 'Dossier professionnel' },
                  { label: 'Consultation', value: 'PDF / Excel' },
                  { label: 'Téléchargement', value: '/files/e5.pdf et /files/e5.xlsx' }
                ]
              }
            ]
          },
          {
            label: 'E6',
            paragraphs: [
              "Le dossier E6 correspond à l’épreuve d’analyse, de support et d’exploitation.",
              "Comme pour E5, les documents sont accessibles au format PDF et Excel."
            ],
            tables: [
              {
                title: 'Dossier E6',
                rows: [
                  { label: 'Type', value: "Dossier d’analyse / support" },
                  { label: 'Consultation', value: 'PDF / Excel' },
                  { label: 'Téléchargement', value: '/files/e6.pdf et /files/e6.xlsx' }
                ]
              }
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Accès aux documents',
        paragraphs: [
          "L’objectif de cette page est de centraliser les pièces officielles liées aux épreuves afin de les rendre facilement accessibles.",
          "Chaque document peut être ouvert directement dans le navigateur ou téléchargé selon le format souhaité."
        ]
      }
    ]
  },

  {
    key: 'realisations-tickets',
    section: 'realisations',
    title: "Outil d'analyse de tickets",
    summary: 'Analyse automatisée avancée des tickets Zendesk avec IA, embeddings, clustering et reporting.',
    paragraphs: [
      "Ce projet a été réalisé dans le contexte de mon alternance chez SYADEM, où une grande partie de l’activité repose sur le traitement de tickets de support liés aux plateformes MesVaccins et Colibri.",
      "L’objectif est de transformer une masse importante de tickets en informations exploitables grâce à un pipeline complet mêlant extraction, nettoyage, analyse sémantique, clustering, résumé automatique et statistiques."
    ],
    table: [
      { label: 'Sources', value: 'Exports XML Zendesk et API Zendesk' },
      { label: 'Sorties', value: 'Clustering, résumés, similarités, statistiques, rapports' },
    ],
    flow: [
      {
        type: 'tabs',
        heading: 'Présentation du projet',
        tabs: [
          {
            label: 'Contexte',
            paragraphs: [
              "Le volume élevé de tickets de support produit une quantité importante de données peu exploitées de manière systématique.",
              "Le projet vise à centraliser ces données et à en extraire des tendances utiles pour améliorer l’analyse, la priorisation et la compréhension des problèmes récurrents."
            ]
          },
          {
            label: 'Objectifs',
            paragraphs: [
              "Centraliser les tickets, nettoyer les données textuelles, produire des embeddings, détecter automatiquement les thèmes récurrents, retrouver les tickets similaires et générer des statistiques claires.",
              "Le système doit aussi servir de base pour des évolutions futures comme un dashboard interne ou une analyse en temps réel."
            ],
            tables: [
              {
                title: 'Objectifs principaux',
                rows: [
                  { label: 'Centralisation', value: 'Regrouper tickets, tags, dates, métadonnées' },
                  { label: 'Analyse', value: 'Détection des thèmes, similarités, clusters' },
                  { label: 'Sortie métier', value: 'Résumés automatiques et statistiques exploitables' }
                ]
              }
            ]
          },
          {
            label: 'Pipeline',
            paragraphs: [
              "Le pipeline repose sur quatre grandes étapes : extraction, normalisation, analyse IA puis génération de statistiques et rapports.",
              "Chaque étape prépare la suivante afin d’obtenir des données plus propres, plus cohérentes et plus utiles pour l’analyse métier."
            ],
            tables: [
              {
                title: 'Étapes principales',
                rows: [
                  { label: '1. Extraction', value: 'XML Zendesk + enrichissement API sélectif' },
                  { label: '2. Nettoyage', value: 'Suppression HTML, signatures, réponses automatiques, bruit' },
                  { label: '3. Analyse IA', value: 'Embeddings, similarité cosinus, clustering KMeans, résumés LLM' },
                  { label: '4. Reporting', value: 'Histogrammes, heatmaps, stats par tags, exports CSV/JSON' }
                ]
              }
            ]
          },
          {
            label: 'Technologies',
            paragraphs: [
              "Le projet utilise Ruby avec une exécution locale de modèles IA via Ollama, afin de conserver les données en interne sans dépendre d’API externes.",
              "L’analyse sémantique est basée sur les embeddings, le clustering et la génération de résumés automatiques."
            ],
            tables: [
              {
                title: 'Stack technique',
                rows: [
                  { label: 'Langages', value: 'Ruby' },
                  { label: 'IA locale', value: 'Ollama' },
                  { label: 'Embeddings', value: 'mxbai-embed-large' },
                  { label: 'Résumé IA', value: 'LLM local' },
                  { label: 'Clustering', value: 'KMeans' }
                ]
              }
            ]
          },
          {
            label: 'Valeur ajoutée',
            paragraphs: [
              "L’outil permet de réduire fortement le temps d’analyse des tickets, de détecter plus vite les problèmes récurrents et de donner une meilleure visibilité aux équipes.",
              "Il constitue aussi une base évolutive pour de futurs outils internes plus avancés."
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Fonctionnalités principales',
        paragraphs: [
          "Le projet permet le regroupement automatique des tickets par thématique, la détection des tickets similaires, la génération de résumés automatiques et la production de statistiques exploitables.",
          "Il sert également de socle pour un futur dashboard technique et métier."
        ]
      },
      {
        heading: 'Évolutions prévues',
        paragraphs: [
          "Parmi les pistes prévues : dashboard interne, analyse en temps réel via webhooks, classification supervisée et génération de rapports mensuels automatiques.",
          "Le projet est donc pensé comme un outil évolutif et réutilisable à plus grande échelle."
        ]
      }
    ]
  },

  {
    key: 'realisations-projet2',
    section: 'realisations',
    title: 'Projet 2',
    summary: 'Projet complémentaire en cours de définition.',
    paragraphs: [
      "Cette section est réservée à un second projet significatif qui viendra compléter mes réalisations.",
      "Il pourra s’agir d’un outil de cybersécurité, d’une application web, d’un script d’automatisation ou d’un autre travail pertinent réalisé dans un cadre personnel, scolaire ou professionnel."
    ],
    table: [
      { label: 'Statut', value: 'À définir' },
      { label: 'Type', value: 'Projet complémentaire' },
    ],
    flow: [
      {
        type: 'text',
        heading: 'État actuel',
        paragraphs: [
          "Pour le moment, cette page sert de réserve pour un futur projet.",
          "Quand le sujet sera choisi et suffisamment avancé, cette section présentera son contexte, ses objectifs, les choix techniques, les difficultés rencontrées et ce qu’il m’a apporté."
        ]
      },
      {
        type: 'table',
        heading: 'Contenu prévu',
        tables: [
          {
            title: 'Structure future',
            rows: [
              { label: 'Contexte', value: 'Présentation du besoin ou du problème' },
              { label: 'Objectifs', value: 'Résultat attendu et intérêt du projet' },
              { label: 'Technique', value: 'Choix techniques et architecture' },
              { label: 'Retour', value: 'Difficultés rencontrées et apprentissages' }
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Perspective',
        paragraphs: [
          "Cette section a vocation à accueillir une autre réalisation importante afin d’enrichir le portfolio.",
          "Elle pourra probablement présenter une autre tâche menée dans le cadre de mon entreprise ou un projet personnel plus avancé."
        ]
      }
    ]
  },
];