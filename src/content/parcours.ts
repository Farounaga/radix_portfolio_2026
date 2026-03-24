import type { ContentItem } from '../types';

export const parcoursContent: ContentItem[] = [
  {
    key: 'parcours-etudes',
    section: 'parcours',
    title: "Parcours d’études",
    summary: 'Formation scientifique, commerciale puis informatique.',
    paragraphs: [
      "Mon parcours d’études s’est construit en plusieurs étapes : une base scientifique avec un baccalauréat S, une ouverture au commerce international, puis une spécialisation plus forte en informatique avec le BTS SIO option SLAM.",
      "Cette évolution m’a permis de développer à la fois de la rigueur, une capacité d’adaptation et une orientation plus concrète vers le développement logiciel et l’analyse de problèmes métiers."
    ],
    table: [
      { label: 'Formation actuelle', value: 'BTS SIO option SLAM' },
      { label: 'Période', value: 'Septembre 2024 → Juin 2026' },
      { label: 'Établissement', value: 'Campus Ermitage, Agen' }
    ],
    flow: [
      {
        type: 'tabs',
        heading: 'Étapes du parcours',
        tabs: [
          {
            label: 'BTS SIO SLAM',
            paragraphs: [
              "Formation orientée vers le développement logiciel, la maintenance, la sécurisation de solutions informatiques et l’intégration d’applications métiers.",
              "Les principaux domaines étudiés sont la programmation, les bases de données, la documentation technique, les tests et les solutions logicielles."
            ],
            tables: [
              {
                title: 'Domaines étudiés',
                rows: [
                  { label: 'Programmation', value: 'Python, Java, JavaScript, POO, architecture simple, MVC' },
                  { label: 'Bases de données', value: 'MCD, MLD, SQL, intégrité, normalisation' },
                  { label: 'Logiciels', value: 'Conception, documentation, tests, refactorisation, versioning' }
                ]
              }
            ]
          },
          {
            label: 'BTS Commerce International',
            paragraphs: [
              "Cette formation m’a apporté une ouverture sur les échanges internationaux, la communication professionnelle et les langues."
            ],
            tables: [
              {
                title: 'Apports principaux',
                rows: [
                  { label: 'Période', value: 'Septembre 2016 → Juin 2018' },
                  { label: 'Établissement', value: 'Lycée Commercial Saint Pierre, Brunoy' },
                  { label: 'Compétences', value: 'Anglais avancé, espagnol intermédiaire, communication professionnelle' }
                ]
              }
            ]
          },
          {
            label: 'Baccalauréat Scientifique',
            paragraphs: [
              "Le baccalauréat scientifique option SVT m’a donné une base méthodologique solide : rigueur, logique, raisonnement et méthode."
            ],
            tables: [
              {
                title: 'Base scientifique',
                rows: [
                  { label: 'Période', value: 'Septembre 2015 → Juillet 2016' },
                  { label: 'Établissement', value: 'Lycée Saint François de Sales, Évreux' },
                  { label: 'Orientation', value: 'Sciences, SVT, logique, méthode expérimentale' }
                ]
              }
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Synthèse',
        paragraphs: [
          "Mon parcours combine sciences, langues, commerce et informatique.",
          "Aujourd’hui, cette progression m’aide à aborder les problèmes avec à la fois une logique technique, une compréhension fonctionnelle et une capacité de communication plus large."
        ]
      }
    ]
  },

  {
    key: 'parcours-travail',
    section: 'parcours',
    title: 'Parcours professionnel',
    summary: 'Support, développement interne, technique et relation client.',
    paragraphs: [
      "Mon parcours professionnel mêle support utilisateur, technique, vente, réparation et développement d’outils internes.",
      "Ces expériences m’ont permis de travailler dans des contextes différents, avec un point commun : comprendre rapidement un besoin concret et apporter une réponse utile."
    ],
    table: [
      { label: 'Poste actuel', value: 'Technicien support – Apprenti BTS SIO SLAM' },
      { label: 'Entreprise', value: 'Syadem' },
      { label: 'Depuis', value: 'Novembre 2024' }
    ],
    flow: [
      {
        type: 'tabs',
        heading: 'Expériences professionnelles',
        tabs: [
          {
            label: 'Syadem',
            paragraphs: [
              "Chez Syadem, je travaille sur deux axes principaux : le support technique et le développement d’outils internes.",
              "Je diagnostique les tickets, reproduis les incidents, réalise des analyses fonctionnelles et échange avec les utilisateurs, notamment des professionnels de santé, ARS et établissements.",
              "En parallèle, je développe un outil d’analyse automatique des tickets avec traitement de texte, clustering vectoriel, extraction de thèmes et automatisation de tâches répétitives."
            ],
            tables: [
              {
                title: 'Informations',
                rows: [
                  { label: 'Période', value: "Novembre 2024 → Aujourd’hui" },
                  { label: 'Lieu', value: 'Bordeaux, France' },
                  { label: 'Rôle', value: 'Support technique et développement interne' }
                ]
              },
              {
                title: 'Activités',
                rows: [
                  { label: 'Support', value: 'Diagnostic, reproduction, analyse fonctionnelle, communication utilisateur' },
                  { label: 'Développement', value: 'Outil interne d’analyse automatique de tickets' },
                  { label: 'Contexte', value: 'Logiciels de santé, vaccination, aide à la décision' }
                ]
              }
            ]
          },
          {
            label: 'Boulanger',
            paragraphs: [
              "Expérience centrée sur l’accueil client, le conseil, la vente de produits électroménagers et multimédia, ainsi que la gestion de stock et la mise en rayon."
            ],
            tables: [
              {
                title: 'Vendeur',
                rows: [
                  { label: 'Période', value: 'Novembre 2023 → Décembre 2023' },
                  { label: 'Lieu', value: 'Boé, France' },
                  { label: 'Missions', value: 'Accueil, conseil, vente, stock, mise en rayon' }
                ]
              }
            ]
          },
          {
            label: 'Docteur IT',
            paragraphs: [
              "Cette expérience m’a apporté un contact direct avec la réparation et le diagnostic matériel, ainsi qu’avec la vente et la relation client."
            ],
            tables: [
              {
                title: 'Vendeur-Technicien',
                rows: [
                  { label: 'Période', value: 'Septembre 2021 → Septembre 2023' },
                  { label: 'Lieu', value: 'Boé, France' },
                  { label: 'Missions', value: 'Réparation smartphones, tablettes, ordinateurs, tests qualité, vente d’accessoires' }
                ]
              }
            ]
          },
          {
            label: 'Réception & stages',
            paragraphs: [
              "J’ai également travaillé comme réceptionniste en hôtellerie et effectué des stages liés à la découverte professionnelle et au commerce international."
            ],
            tables: [
              {
                title: 'Autres expériences',
                rows: [
                  { label: 'Réceptionniste', value: 'Hôtel du Mont Doré — Juin 2019 → Septembre 2019' },
                  { label: 'Stage commerce international', value: 'Venjakob Maschinenbau GmbH & Co. KG — Juin 2016 → Août 2016' },
                  { label: 'Stage découverte', value: 'Air France — Février 2012 → Mars 2012' }
                ]
              }
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Ce que ces expériences m’ont apporté',
        paragraphs: [
          "Elles m’ont appris à gérer des demandes réelles, à rester opérationnel, à communiquer avec différents profils et à relier technique et besoin utilisateur.",
          "Elles renforcent aussi ma capacité à travailler dans des contextes variés, du support au développement."
        ]
      }
    ]
  },

  {
    key: 'parcours-certifications',
    section: 'parcours',
    title: 'Certifications & récompenses',
    summary: 'Certifications Cisco et participation reconnue à REMPAR25.',
    paragraphs: [
      "Mes certifications me permettent de valider des bases concrètes en cybersécurité, réseau, Python, IoT et compétences transversales.",
      "Elles complètent ma formation académique par des validations plus ciblées et montrent une volonté de progression continue."
    ],
    table: [
      { label: 'Type principal', value: 'Certifications Cisco' },
      { label: 'Complément', value: 'Récompense REMPAR25' }
    ],
    flow: [
      {
        type: 'tabs',
        heading: 'Détail',
        tabs: [
          {
            label: 'Certifications Cisco',
            paragraphs: [
              "Plusieurs certifications Cisco viennent compléter mon parcours technique et valident des connaissances utiles en sécurité, réseau, Python, IoT et collaboration."
            ],
            tables: [
              {
                title: 'Certifications obtenues',
                rows: [
                  { label: 'Engaging Stakeholders for Success', value: 'Communication, gestion d’équipe, réussite de projets collaboratifs' },
                  { label: 'Introduction to Cybersecurity', value: 'Menaces modernes, sécurité réseau, bonnes pratiques' },
                  { label: 'Introduction to IoT', value: 'Concepts fondamentaux de l’Internet des Objets' },
                  { label: 'Networking Basics', value: 'Adressage IP, routage, infrastructures réseau' },
                  { label: 'Python Essentials 1', value: 'Syntaxe, structures de contrôle, logique procédurale' }
                ]
              }
            ]
          },
          {
            label: 'REMPAR25',
            paragraphs: [
              "J’ai également reçu un certificat de participation pour une performance remarquable dans la cellule communication lors de l’exercice national de cybersécurité REMPAR25."
            ],
            tables: [
              {
                title: 'Récompense',
                rows: [
                  { label: 'Nom', value: 'REMPAR25 — Cellule Communication' },
                  { label: 'Type', value: 'Exercice national de cybersécurité' },
                  { label: 'Reconnaissance', value: 'Certificat de participation pour performance remarquable' }
                ]
              }
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Résumé',
        paragraphs: [
          "Ces certifications et cette récompense confirment à la fois un intérêt fort pour la cybersécurité et une progression structurée sur plusieurs axes techniques."
        ]
      }
    ]
  },

  {
    key: 'parcours-competences',
    section: 'parcours',
    title: 'Compétences',
    summary: 'Backend, frontend et langues.',
    paragraphs: [
      "Mes compétences couvrent principalement le backend, les bases de données, les outils de développement, quelques technologies frontend et plusieurs langues.",
      "Le niveau varie selon les domaines, mais l’ensemble reflète surtout une progression pratique construite par les projets, le travail et la formation."
    ],
    table: [
      { label: 'Axes principaux', value: 'Backend, Frontend, Langues' },
      { label: 'Approche', value: 'Apprentissage pratique et progressif' }
    ],
    flow: [
      {
        type: 'tabs',
        heading: 'Compétences détaillées',
        tabs: [
          {
            label: 'Backend',
            paragraphs: [
              "Le backend constitue aujourd’hui mon axe principal de progression."
            ],
            tables: [
              {
                title: 'Stack backend',
                rows: [
                  { label: 'Git', value: 'Bonne compréhension du versioning, des branches et du travail collaboratif' },
                  { label: 'MongoDB', value: 'Modélisation simple, collections, requêtes de base' },
                  { label: 'Ruby', value: 'Scripts et utilitaires internes, notions de Rails' },
                  { label: 'MySQL / MariaDB', value: 'Schémas, requêtes, vues, notions d’optimisation' },
                  { label: 'Python', value: 'Scripts, analyse de données, premiers travaux liés à l’IA' },
                  { label: 'Node.js', value: 'Bases de programmation serveur et petits services' },
                  { label: 'Docker', value: 'Images, conteneurs, volumes simples' },
                  { label: 'PHP 8+', value: 'Bases du langage, compréhension de Symfony et MVC' },
                  { label: 'Java / Kubernetes', value: 'Notions très basiques' }
                ]
              }
            ]
          },
          {
            label: 'Frontend',
            paragraphs: [
              "Côté frontend, je maîtrise surtout les bases nécessaires pour construire des interfaces simples, propres et réactives."
            ],
            tables: [
              {
                title: 'Stack frontend',
                rows: [
                  { label: 'HTML5', value: 'Structure de pages web sémantiques' },
                  { label: 'CSS3', value: 'Layouts responsives et design simple' },
                  { label: 'JavaScript', value: 'DOM, fetch, logique d’interaction côté client' },
                  { label: 'Bootstrap 5+', value: 'Grille et composants responsive' },
                  { label: 'React', value: 'Composants, props, state de base' },
                  { label: 'Vue.js', value: 'Quelques essais ponctuels' }
                ]
              }
            ]
          },
          {
            label: 'Langues',
            paragraphs: [
              "Les langues restent un point important de mon profil, notamment pour la lecture technique, la communication et l’adaptation à différents contextes."
            ],
            tables: [
              {
                title: 'Compétences linguistiques',
                rows: [
                  { label: 'Français', value: 'Bilingue' },
                  { label: 'Anglais', value: 'Avancé' }
                ]
              }
            ]
          }
        ]
      }
    ],
    blocks: [
      {
        heading: 'Synthèse',
        paragraphs: [
          "Mon profil reste en construction, mais il repose déjà sur une base pratique en développement, en analyse technique, en support et en communication.",
          "L’objectif est maintenant de continuer à renforcer ces compétences pour évoluer vers un profil plus solide en développement et cybersécurité."
        ]
      }
    ]
  }
];