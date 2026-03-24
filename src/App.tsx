import { useEffect, useState } from 'react';
import {
  Badge,
  Blockquote,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Separator,
  Strong,
  Text,
} from '@radix-ui/themes';
import {
  BackpackIcon,
  GearIcon,
  FileTextIcon,
  GlobeIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

type RssItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
};

const feeds = [
  { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews' },
  { name: 'MIT Technology Review - AI', url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed/' },
  { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/feed/' },
];

const presentation = [
  {
    title: 'Présentation',
    text: [
      'Je suis Vladimir Spirine, étudiant en BTS SIO option SLAM. Je m’intéresse au développement (Python / Ruby / Web), à la cybersécurité, à l’IA et à l’automatisation.',
      'Chez Syadem, je travaille entre support applicatif et outillage interne, avec un focus sur l’analyse de tickets et l’amélioration continue.',
    ],
  },
  {
    title: 'Présentation de la formation',
    text: [
      'Le BTS SIO SLAM est une formation professionnalisante orientée développement, architecture applicative, bases de données et sécurité.',
      'Compétences clés : modélisation du besoin, développement applicatif, documentation, tests, pratiques OWASP et méthodes projet.',
    ],
  },
  {
    title: "Presentation de l'établissement",
    text: [
      'Campus Ermitage (Agen) : établissement en alternance, promotions à taille humaine, suivi pédagogique proche et mises en situation professionnelles.',
      'Le rythme alterné permet de relier théorie et pratique en entreprise tout au long du BTS.',
    ],
  },
  {
    title: "Presentation de l'entreprise",
    text: [
      'SYADEM conçoit des solutions d’aide à la décision vaccinale : MesVaccins, Colibri, Carnet de Vaccination Numérique et NUVA.',
      'Mon rôle : support technique, qualification et suivi de tickets, et scripts internes (Python / Ruby) pour diagnostic, nettoyage et analyse.',
    ],
  },
];

const parcoursEtudes = [
  'BTS SIO SLAM (2024–2026) — Campus Ermitage, Agen.',
  'BTS Commerce International (2016–2018) — Lycée Saint Pierre, Brunoy.',
  'Baccalauréat Scientifique SVT (2015–2016) — Lycée Saint François de Sales, Évreux.',
];

const parcoursPro = [
  'Technicien support / apprenti BTS SIO — Syadem (depuis novembre 2024).',
  'Vendeur — Boulanger (2023).',
  'Vendeur-technicien — Docteur IT (2021–2023).',
  'Réceptionniste — Hôtel du Mont Doré (2019).',
  'Stages : Venjakob Maschinenbau (2016) et Air France (2012).',
];

const competences = [
  'Backend & data : Python, Ruby, SQL (MySQL/MariaDB), MongoDB.',
  'Web : HTML, CSS, JavaScript, bases React.',
  'Outils : Git/GitHub, documentation technique, scripts d’automatisation.',
  'Langues : français (bilingue), russe (maternel), anglais (avancé), espagnol (intermédiaire), chinois (débutant).',
];

const certifications = [
  'Cisco: Engaging Stakeholders for Success',
  'Cisco: Introduction to Cybersecurity',
  'Cisco: Introduction to IoT',
  'Cisco: Networking Basics',
  'Cisco: Python Essentials 1',
  'REMPAR25 — certificat de participation (cellule communication)',
];

const realisations = [
  {
    title: 'Dossiers E5 & E6',
    text: 'Documents officiels pour les épreuves E5 (conception/développement) et E6 (support/exploitation).',
    links: [
      { label: 'E5 PDF', url: '/files/e5.pdf' },
      { label: 'E5 Excel', url: '/files/e5.xlsx' },
      { label: 'E6 PDF', url: '/files/e6.pdf' },
      { label: 'E6 Excel', url: '/files/e6.xlsx' },
    ],
  },
  {
    title: "Outil d'analyse de tickets",
    text: 'Projet Syadem: pipeline d’analyse de tickets Zendesk (extraction, nettoyage, embeddings, clustering, résumés IA et statistiques).',
    links: [],
  },
  {
    title: 'Projet 2',
    text: 'Espace réservé à un second projet majeur (cybersécurité, application web, automatisation) avec publication après consolidation.',
    links: [],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <Flex direction="column" gap="2">
      {items.map((item) => (
        <Text key={item}>• {item}</Text>
      ))}
    </Flex>
  );
}

export function App() {
  const [rssItems, setRssItems] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFeeds = async () => {
      try {
        setLoading(true);
        setError(null);

        const responses = await Promise.all(
          feeds.map(async (feed) => {
            const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}&count=3`;
            const res = await fetch(endpoint);
            if (!res.ok) {
              throw new Error(`Erreur HTTP ${res.status}`);
            }
            const data = await res.json();
            if (data.status !== 'ok' || !Array.isArray(data.items)) {
              throw new Error('Flux RSS indisponible');
            }

            return data.items.map((item: { title: string; link: string; pubDate: string }) => ({
              title: item.title,
              link: item.link,
              pubDate: item.pubDate,
              source: feed.name,
            }));
          }),
        );

        const merged = responses
          .flat()
          .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
          .slice(0, 9);

        setRssItems(merged);
      } catch {
        setError('Impossible de charger les flux RSS pour le moment.');
      } finally {
        setLoading(false);
      }
    };

    void loadFeeds();
  }, []);

  return (
    <Container size="4" p="4">
      <Flex direction="column" gap="5">
        <Card className="hero" size="3">
          <Flex direction="column" gap="3">
            <Badge size="3" color="indigo">
              Portfolio BTS SIO SLAM
            </Badge>
            <Heading size="8" className="hero-title">Présentation, parcours, compétences et réalisations</Heading>
            <Text color="gray">
              Contenu structuré à partir du dépôt docus fourni, avec interface Radix UI et icônes Radix.
            </Text>
          </Flex>
        </Card>

        <Box as="section">
          <Flex align="center" gap="2" mb="3">
            <PersonIcon />
            <Heading size="6">Présentation</Heading>
          </Flex>
          <Grid columns={{ initial: '1', sm: '2' }} gap="3">
            {presentation.map((item) => (
              <Card key={item.title} className="section-card" size="3">
                <Flex direction="column" gap="2">
                  <Text as="div" weight="bold">
                    {item.title}
                  </Text>
                  {item.text.map((line) => (
                    <Text key={line} color="gray">
                      {line}
                    </Text>
                  ))}
                </Flex>
              </Card>
            ))}
          </Grid>
        </Box>

        <Box as="section">
          <Flex align="center" gap="2" mb="3">
            <BackpackIcon />
            <Heading size="6">Parcours & compétences</Heading>
          </Flex>
          <Grid columns={{ initial: '1', sm: '2' }} gap="3">
            <Card className="section-card" size="3">
              <Heading size="4" mb="2">Parcours d’études</Heading>
              <BulletList items={parcoursEtudes} />
            </Card>
            <Card className="section-card" size="3">
              <Heading size="4" mb="2">Parcours Professionnel</Heading>
              <BulletList items={parcoursPro} />
            </Card>
            <Card className="section-card" size="3">
              <Heading size="4" mb="2">Compétences</Heading>
              <BulletList items={competences} />
            </Card>
            <Card className="section-card" size="3">
              <Flex align="center" gap="2" mb="2">
                <GearIcon />
                <Heading size="4">Certifications & Récompenses</Heading>
              </Flex>
              <BulletList items={certifications} />
            </Card>
          </Grid>
        </Box>

        <Box as="section">
          <Flex align="center" gap="2" mb="3">
            <RocketIcon />
            <Heading size="6">Réalisations</Heading>
          </Flex>
          <Grid columns="1" gap="3">
            {realisations.map((item) => (
              <Card className="section-card" key={item.title} size="3">
                <Flex direction="column" gap="2">
                  <Flex align="center" gap="2">
                    <FileTextIcon />
                    <Strong>{item.title}</Strong>
                  </Flex>
                  <Text color="gray">{item.text}</Text>
                  {item.links.length > 0 && (
                    <Flex gap="3" wrap="wrap">
                      {item.links.map((linkItem) => (
                        <Link href={linkItem.url} key={linkItem.label}>
                          {linkItem.label}
                        </Link>
                      ))}
                    </Flex>
                  )}
                </Flex>
              </Card>
            ))}
          </Grid>
        </Box>

        <Box as="section">
          <Card className="section-card" size="3">
            <Flex align="center" gap="2" mb="2">
              <Box className="icon-wrap">
                <GlobeIcon />
              </Box>
              <Heading size="5">Veille technologique — Flux RSS</Heading>
            </Flex>
            <Text color="gray" mb="2">
              IA et cybersécurité via plusieurs sources RSS.
            </Text>
            <Separator size="4" my="3" />

            {loading && <Text>Chargement des actualités…</Text>}
            {error && <Blockquote color="red">{error}</Blockquote>}

            {!loading && !error && (
              <Flex direction="column" gap="2">
                {rssItems.map((item) => (
                  <Card key={`${item.link}-${item.pubDate}`} variant="surface">
                    <Text weight="bold">{item.title}</Text>
                    <Flex gap="2" align="center" wrap="wrap" mt="1">
                      <Badge variant="soft">{item.source}</Badge>
                      <Text size="1" color="gray">
                        {new Date(item.pubDate).toLocaleDateString('fr-FR')}
                      </Text>
                      <Link href={item.link} target="_blank" rel="noreferrer">
                        Lire l’article
                      </Link>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            )}
          </Card>
        </Box>
      </Flex>
    </Container>
  );
}
