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
      { label: 'Formats', value: 'Excel et Word' },
    ],
    flow: [
      {
        type: 'text',
        heading: 'Documents disponibles',
        paragraphs: [
          "Les dossiers E5 et E6 sont centralisés sur cette page afin de faciliter leur accès.",
          "Chaque document est disponible en téléchargement direct depuis le site."
        ]
      },
      {
        type: 'table',
        heading: 'Accès aux dossiers',
        tables: [
          {
            title: 'Dossier E5',
            rows: [
              { label: 'Type', value: 'Dossier professionnel' },
              { label: 'Consultation', value: 'Excel' },
              { label: 'Téléchargement', value: '/files/Fiche_E5_SPIRINE.xlsx' }
            ]
          },
          {
            title: 'Dossier E6',
            rows: [
              { label: 'Type', value: "Dossier d’analyse / support" },
              { label: 'Consultation', value: 'Word (.docx)' },
              { label: 'Téléchargement', value: '/files/Fiche_E6_SPIRINE.docx' }
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
          "Chaque document peut être téléchargé selon le format souhaité."
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
        type: 'text',
        heading: 'Contexte',
        paragraphs: [
          "Le volume élevé de tickets de support produit une quantité importante de données peu exploitées de manière systématique.",
          "Le projet vise à centraliser ces données et à en extraire des tendances utiles pour améliorer l’analyse, la priorisation et la compréhension des problèmes récurrents."
        ]
      },
      {
        type: 'table',
        heading: 'Objectifs principaux',
        tables: [
          {
            title: 'Objectifs du projet',
            rows: [
              { label: 'Centralisation', value: 'Regrouper tickets, tags, dates, métadonnées' },
              { label: 'Analyse', value: 'Détection des thèmes, similarités, clusters' },
              { label: 'Sortie métier', value: 'Résumés automatiques et statistiques exploitables' }
            ]
          }
        ]
      },
      {
        type: 'table',
        heading: 'Pipeline',
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
        type: 'table',
        heading: 'Technologies',
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
    title: 'GameConnect',
    summary: 'Plateforme sociale de gaming e-sport avec profils, matchmaking, messagerie et architecture full stack.',
    paragraphs: [
      "GameConnect est une plateforme sociale pensée pour l’univers du gaming et de l’e-sport. Son objectif est de permettre aux joueurs de trouver des coéquipiers, de créer leur communauté et d’échanger autour de leurs jeux.",
      "Le projet combine plusieurs dimensions : gestion des utilisateurs, profils détaillés, bibliothèque de jeux, système de mise en relation, messagerie, statistiques et architecture web complète."
    ],
    table: [
      { label: 'Type', value: 'Plateforme sociale gaming e-sport' },
      { label: 'Stack', value: 'PHP, React, MySQL, Tailwind CSS' },
    ],
    flow: [
      {
        type: 'text',
        heading: 'Concept',
        paragraphs: [
          "La plateforme a été conçue comme un espace central pour les joueurs souhaitant organiser leur profil gaming, suivre leurs jeux, trouver des partenaires compatibles et échanger au sein d’une communauté.",
          "L’idée est de proposer une expérience plus complète qu’un simple annuaire de joueurs, avec une logique de profils, d’interactions et de mise en relation."
        ]
      },
      {
        type: 'table',
        heading: 'Fonctionnalités principales',
        tables: [
          {
            title: 'Gestion des utilisateurs',
            rows: [
              { label: 'Authentification', value: 'Connexion sécurisée par JWT avec chiffrement des mots de passe' },
              { label: 'Profils', value: 'Profils détaillés avec statistiques, préférences et liens sociaux' },
              { label: 'Vie privée', value: 'Réglages précis de visibilité des profils' }
            ]
          },
          {
            title: 'Fonctions gaming',
            rows: [
              { label: 'Jeux', value: 'Support multi-jeux et bibliothèque personnelle' },
              { label: 'Compétences', value: 'Statistiques, rangs et temps de jeu par titre' },
              { label: 'Matchmaking', value: 'Appariement selon jeux, niveau, disponibilités, localisation et préférences' }
            ]
          },
          {
            title: 'Communication',
            rows: [
              { label: 'Messagerie', value: 'Chat sécurisé en temps réel entre joueurs' },
              { label: 'Forums', value: 'Discussions communautaires par jeu et sujets généraux' },
              { label: 'Équipes', value: 'Création ou intégration d’équipes avec outils dédiés' }
            ]
          }
        ]
      },
      {
        type: 'table',
        heading: 'Architecture technique',
        tables: [
          {
            title: 'Backend',
            rows: [
              { label: 'Technologie', value: 'PHP 8.0+' },
              { label: 'API', value: 'API RESTful' },
              { label: 'Authentification', value: 'JWT' },
              { label: 'Dépendances', value: 'Composer' }
            ]
          },
          {
            title: 'Frontend',
            rows: [
              { label: 'Framework', value: 'React 18.2' },
              { label: 'Build tool', value: 'Vite' },
              { label: 'Style', value: 'Tailwind CSS 3.3' },
              { label: 'Client HTTP', value: 'Axios' }
            ]
          },
          {
            title: 'Base de données',
            rows: [
              { label: 'SGBD', value: 'MySQL 8.0' },
              { label: 'Structure', value: 'Conception normalisée et relations optimisées' },
              { label: 'Performance', value: 'Indexation efficace et intégrité des données' }
            ]
          }
        ]
      },
      {
        type: 'table',
        heading: 'Aspects applicatifs',
        tables: [
          {
            title: 'API et modules',
            rows: [
              { label: 'Profils', value: 'Consultation et mise à jour des profils utilisateur' },
              { label: 'Jeux', value: 'Gestion du catalogue et de la bibliothèque personnelle' },
              { label: 'Matchs', value: 'Recherche, consultation et acceptation de matchs' },
              { label: 'Messages', value: 'Conversations privées entre utilisateurs' }
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Objectifs du projet',
        paragraphs: [
          "Le projet vise à proposer une plateforme moderne, claire et évolutive pour les joueurs, avec une vraie logique de réseau social spécialisé dans le gaming.",
          "Il met l’accent sur l’identité utilisateur, la mise en relation pertinente, la communication et la structuration d’une communauté."
        ]
      },
      {
        heading: 'Aspects techniques intéressants',
        paragraphs: [
          "GameConnect met en avant une architecture full stack avec séparation frontend/backend, authentification JWT, base de données relationnelle et API REST.",
          "C’est un projet pertinent pour illustrer la conception d’une application web complète avec logique métier, sécurité, données structurées et interface moderne."
        ]
      },
      {
        heading: 'Évolutions prévues',
        paragraphs: [
          "La feuille de route prévoit notamment des notifications en temps réel, une gestion d’équipes plus avancée, l’organisation de tournois, une application mobile et d’autres fonctionnalités communautaires.",
          "Le projet a donc été pensé comme une base solide pouvant évoluer vers une plateforme plus complète."
        ]
      }
    ]
  },
];