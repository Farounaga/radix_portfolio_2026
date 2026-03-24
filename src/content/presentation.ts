import type { ContentItem } from '../types';

export const presentationContent: ContentItem[] = [
  {
    key: 'presentation-intro',
    section: 'presentation',
    title: 'Présentation',
    summary: 'Profil général et objectifs.',
    paragraphs: [
      "Je m'appelle Vladimir Spirine et je suis actuellement étudiant en BTS SIO option SLAM en alternance.",
      "Je m'intéresse particulièrement au développement, à la cybersécurité, à l'automatisation et à l'analyse de données. Mon objectif est de construire un profil technique solide, capable de relier compréhension métier, développement logiciel et résolution de problèmes concrets en entreprise."
    ],
    table: [
      { label: 'Nom', value: 'Vladimir Spirine' },
      { label: 'Rôle', value: 'Étudiant BTS SIO SLAM en alternance' },
    ],
    flow: [
      {
        type: 'text',
        heading: 'Profil',
        paragraphs: [
          "Je développe progressivement mes compétences en programmation, en analyse technique et en conception d'outils utiles dans un cadre professionnel.",
          "Je cherche à progresser dans des domaines concrets comme le développement applicatif, les scripts d'automatisation, la structuration des données et la cybersécurité."
        ]
      },
      {
        type: 'table',
        heading: 'Informations clés',
        tables: [
          {
            title: 'Identité',
            rows: [
              { label: 'Nom', value: 'Vladimir Spirine' },
              { label: 'Statut', value: 'Étudiant en alternance' }
            ]
          },
          {
            title: 'Axes d’intérêt',
            rows: [
              { label: 'Développement', value: 'Applications, scripts, outils internes' },
              { label: 'Objectif', value: 'Construire un profil solide en développement / cybersécurité' }
            ]
          }
        ]
      },
      {
        type: 'tabs',
        heading: 'Orientation',
        tabs: [
          {
            label: 'Technique',
            paragraphs: [
              "Développement logiciel, automatisation, structuration des données, qualité du code et logique de projet."
            ]
          },
          {
            label: 'Professionnelle',
            paragraphs: [
              "Comprendre les besoins réels, produire des outils utiles et évoluer dans des environnements exigeants."
            ]
          },
          {
            label: 'Évolution',
            paragraphs: [
              "Préparer la suite des études et viser à terme un profil plus avancé en développement et cybersécurité."
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Objectif personnel',
        paragraphs: [
          "Cette page présente mon parcours de formation, l’établissement dans lequel j’étudie et l’entreprise dans laquelle je travaille en alternance.",
          "Elle permet de situer mon environnement de travail, les compétences que je développe et la direction dans laquelle je veux évoluer."
        ]
      }
    ],
  },

  {
    key: 'presentation-formation',
    section: 'presentation',
    title: 'Présentation de la formation',
    summary: 'Cadre et objectifs pédagogiques.',
    paragraphs: [
      "Le BTS SIO option SLAM est une formation professionnalisante orientée vers le développement, les systèmes d'information, l'analyse métier et la cybersécurité.",
      "Elle prépare à concevoir, développer, sécuriser et maintenir des applications utilisées dans les organisations, tout en donnant une première expérience concrète des méthodes et outils du monde professionnel."
    ],
    table: [
      { label: 'Formation', value: 'BTS SIO option SLAM' },
      { label: 'Spécialité', value: 'Solutions Logicielles et Applications Métiers' },
      { label: 'Orientation', value: 'Développement, bases de données, architecture, sécurité' },
    ],
    flow: [
      {
        type: 'text',
        heading: 'Qu’est-ce que le BTS SIO ?',
        paragraphs: [
          "Le BTS SIO forme des techniciens capables d’analyser un besoin, de concevoir une solution, de développer des applications et d’en assurer la maintenance.",
          "L’option SLAM est plus spécifiquement centrée sur le développement logiciel, les bases de données, l’architecture applicative et l’intégration métier."
        ]
      },
      {
        type: 'tabs',
        heading: 'Contenu pédagogique',
        tabs: [
          {
            label: 'Développement',
            paragraphs: [
              "Python, Java, JavaScript, SQL, architecture MVC, API REST."
            ]
          },
          {
            label: 'Bases de données',
            paragraphs: [
              "MCD, MLD, normalisation, cohérence des données, index, transactions."
            ]
          },
          {
            label: 'Sécurité / RGPD',
            paragraphs: [
              "Authentification, rôles, données sensibles, conformité RGPD, sensibilisation OWASP."
            ]
          },
          {
            label: 'Gestion de projet',
            paragraphs: [
              "Organisation par projets, backlog, livrables, documentation, outils collaboratifs."
            ]
          }
        ]
      },
      {
        type: 'table',
        heading: 'Compétences développées',
        tables: [
          {
            title: 'Compétences techniques',
            rows: [
              { label: 'Analyse', value: 'Comprendre et formaliser un besoin' },
              { label: 'Conception', value: 'Modéliser une solution et une base de données' },
              { label: 'Développement', value: 'Créer, tester et maintenir une application' },
              { label: 'Sécurité', value: 'Appliquer de bonnes pratiques dès la conception' }
            ]
          },
          {
            title: 'Méthodes de travail',
            rows: [
              { label: 'Outils', value: 'Git, GitHub, VS Code, IntelliJ, Postman' },
              { label: 'Méthode', value: 'Mini-sprints, documentation, revue de code' },
              { label: 'Livrables', value: 'Documentation technique et utilisateur' }
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Débouchés possibles',
        paragraphs: [
          "Le BTS SIO SLAM ouvre vers des postes de développeur junior, analyste développeur, intégrateur de solutions métiers ou support applicatif évolutif.",
          "Il permet également une poursuite d’études vers une licence professionnelle, un bachelor, un BUT ou une école d’ingénieur."
        ]
      },
      {
        heading: 'Valeur ajoutée de la formation',
        paragraphs: [
          "Cette formation me permet d’acquérir une vision structurée du développement d’application, de la modélisation jusqu’à la maintenance.",
          "Elle me donne aussi un cadre concret pour relier théorie, pratique, sécurité et compréhension du besoin utilisateur."
        ]
      }
    ],
  },

  {
    key: 'presentation-etablissement',
    section: 'presentation',
    title: "Présentation de l'établissement",
    summary: "Contexte de l’établissement.",
    paragraphs: [
      "Je suis ma formation au Campus Ermitage à Agen, un établissement privé proposant plusieurs formations post-bac en alternance.",
      "Le campus offre un cadre de travail avec des effectifs réduits, un accompagnement pédagogique rapproché et une organisation tournée vers l’insertion professionnelle."
    ],
    table: [
      { label: 'Établissement', value: 'Campus Ermitage' },
      { label: 'Ville', value: 'Agen' },
      { label: 'Adresse', value: '304 avenue Joseph Amouroux, 47000 Agen' },
      { label: 'Téléphone', value: '05 53 66 08 71' },
    ],
    flow: [
      {
        type: 'text',
        heading: 'Le Campus Ermitage',
        paragraphs: [
          "Le Campus Ermitage regroupe plusieurs structures de formation et propose des cursus du BAC+2 au BAC+3.",
          "L’établissement met en avant l’alternance, les promotions à taille humaine et un suivi pédagogique plus proche des étudiants."
        ]
      },
      {
        type: 'table',
        heading: 'Place du BTS SIO dans le campus',
        tables: [
          {
            title: 'Positionnement',
            rows: [
              { label: 'Filière', value: 'Informatique / numérique' },
              { label: 'Durée', value: '2 ans' },
              { label: 'Rythme', value: 'Alternance' }
            ]
          },
          {
            title: 'Organisation',
            rows: [
              { label: 'Répartition', value: 'Environ 2 jours en centre, 3 jours en entreprise' },
              { label: 'Volume', value: 'Environ 1350h en centre' },
              { label: 'Encadrement', value: 'Petits effectifs et suivi pédagogique' }
            ]
          }
        ]
      },
      {
        type: 'tabs',
        heading: 'Environnement de formation',
        tabs: [
          {
            label: 'Vie au campus',
            paragraphs: [
              "Promotion à taille humaine, ambiance plus proche, salles informatiques dédiées et échanges fréquents avec les formateurs."
            ]
          },
          {
            label: 'Pédagogie',
            paragraphs: [
              "Travail par projets, livrables, études de cas et autonomie progressive dans l’organisation."
            ]
          },
          {
            label: 'Écosystème local',
            paragraphs: [
              "Le BTS SIO du Campus Ermitage s’inscrit dans l’écosystème numérique du Lot-et-Garonne, notamment via le Campus Numérique 47."
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Ce que cet établissement m’apporte',
        paragraphs: [
          "Le campus me donne un cadre régulier pour structurer mes apprentissages et avancer sur des projets concrets.",
          "Il m’aide à transformer des centres d’intérêt personnels en compétences plus solides, avec une logique plus professionnelle dans la manière de travailler."
        ]
      },
      {
        heading: 'Perspective personnelle',
        paragraphs: [
          "J’utilise ce cadre pour construire un profil cohérent en développement et en cybersécurité.",
          "L’objectif est de consolider mes bases, gagner en autonomie et préparer la suite de mon parcours."
        ]
      }
    ],
  },

  {
    key: 'presentation-entreprise',
    section: 'presentation',
    title: "Présentation de l'entreprise",
    summary: 'Environnement professionnel.',
    paragraphs: [
      "SYADEM est une entreprise française spécialisée dans les systèmes d’aide à la décision vaccinale et les logiciels de gestion de la vaccination.",
      "Elle développe des solutions comme MesVaccins, Colibri, le Carnet de Vaccination Numérique et la nomenclature NUVA, avec des enjeux concrets de santé, de réglementation, de traçabilité et d’interopérabilité."
    ],
    table: [
      { label: 'Entreprise', value: 'SYADEM' },
      { label: 'Domaine', value: 'Santé / e-santé / vaccination' },
      { label: 'Activité', value: "Logiciels d’aide à la décision vaccinale" },
    ],
    flow: [
      {
        type: 'tabs',
        heading: 'Principales solutions',
        tabs: [
          {
            label: 'MesVaccins',
            paragraphs: [
              "Carnet de vaccination numérique et système expert de recommandations vaccinales personnalisées."
            ]
          },
          {
            label: 'Colibri',
            paragraphs: [
              "Logiciel métier de gestion de l’activité vaccinale, utilisé notamment dans les campagnes de vaccination dans les collèges."
            ]
          },
          {
            label: 'CVN',
            paragraphs: [
              "Carnet de vaccination numérique structuré, sécurisé et exploitable par les patients comme par les professionnels."
            ]
          },
          {
            label: 'NUVA',
            paragraphs: [
              "Terminologie structurée et multilingue des vaccins pour améliorer l’interopérabilité des données vaccinales."
            ]
          },
          {
            label: 'Tableaux de bord',
            paragraphs: [
              "Outils de suivi de couverture vaccinale, de détection d’erreurs et de remontée d’anomalies."
            ]
          }
        ]
      },
      {
        type: 'table',
        heading: 'Mon rôle chez SYADEM',
        tables: [
          {
            title: 'Support technique',
            rows: [
              { label: 'Utilisateurs', value: 'Professionnels de santé, ARS, établissements, structures de vaccination' },
              { label: 'Missions', value: 'Analyse de tickets, qualification, reproduction des anomalies' },
              { label: 'Communication', value: "Suivi des corrections et retours vers les utilisateurs" }
            ]
          },
          {
            title: 'Développement & outils internes',
            rows: [
              { label: 'Analyse', value: 'Outils pour regrouper les problèmes récurrents et produire des statistiques' },
              { label: 'Automatisation', value: 'Scripts et outils pour faciliter certains traitements et diagnostics' },
              { label: 'Technologies', value: 'Python, Ruby et autres outils internes' }
            ]
          }
        ]
      },
      {
        type: 'text',
        heading: 'Ce que cette expérience m’apporte',
        paragraphs: [
          "Cette alternance me permet de travailler sur un vrai produit de santé utilisé à grande échelle, avec des contraintes réelles de sécurité, de confidentialité et de conformité.",
          "Elle me place à l’interface entre support, données et développement, ce qui correspond directement à mon projet professionnel."
        ]
      }
    ],
    blocks: [
      {
        heading: 'Enjeux métier',
        paragraphs: [
          "Travailler chez SYADEM me permet de mieux comprendre comment des recommandations officielles, des terminologies complexes et des contraintes réglementaires sont transformées en outils concrets pour les professionnels et les patients.",
          "C’est un environnement particulièrement intéressant car il relie technique, santé publique et usages réels du terrain."
        ]
      },
      {
        heading: 'Apport personnel',
        paragraphs: [
          "Cette expérience renforce ma capacité à analyser des problèmes, à comprendre un existant, à communiquer avec des utilisateurs et à développer des outils utiles.",
          "Elle me permet aussi de mieux définir la direction dans laquelle je veux évoluer à long terme."
        ]
      }
    ],
  },
];