import { useEffect, useMemo, useState } from 'react';
import {
  Badge,
  Blockquote,
  Box,
  Button,
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
  CodeIcon,
  FileTextIcon,
  GlobeIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

type PageKey = 'home' | 'presentation' | 'parcours' | 'realisations' | 'veille';

type RssItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
};

const navItems: Array<{ key: PageKey; label: string; icon: JSX.Element }> = [
  { key: 'home', label: 'Accueil', icon: <HomeIcon /> },
  { key: 'presentation', label: 'Présentation', icon: <PersonIcon /> },
  { key: 'parcours', label: 'Parcours & Compétences', icon: <BackpackIcon /> },
  { key: 'realisations', label: 'Réalisations', icon: <RocketIcon /> },
  { key: 'veille', label: 'Veille technologique', icon: <GlobeIcon /> },
];

const feeds = [
  { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews' },
  { name: 'BleepingComputer', url: 'https://www.bleepingcomputer.com/feed/' },
  { name: 'MIT Technology Review AI', url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed/' },
];

const fallbackRss: RssItem[] = [
  {
    title: 'Top 10 AI Security Risks Teams Should Track in 2026',
    link: 'https://www.technologyreview.com/',
    pubDate: '2026-03-20',
    source: 'MIT Technology Review AI',
  },
  {
    title: 'Ransomware Campaign Targets SMB Backups',
    link: 'https://www.bleepingcomputer.com/',
    pubDate: '2026-03-18',
    source: 'BleepingComputer',
  },
  {
    title: 'Zero-day Exploitation in the Wild: What Defenders Need',
    link: 'https://thehackernews.com/',
    pubDate: '2026-03-15',
    source: 'The Hacker News',
  },
];

function useHashPage(): [PageKey, (key: PageKey) => void] {
  const parse = () => {
    const hash = window.location.hash.replace('#', '');
    if (navItems.some((x) => x.key === hash)) {
      return hash as PageKey;
    }
    return 'home' as PageKey;
  };

  const [page, setPage] = useState<PageKey>(parse());

  useEffect(() => {
    const onHash = () => setPage(parse());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const goTo = (key: PageKey) => {
    window.location.hash = key;
  };

  return [page, goTo];
}

function PortfolioHeader({ currentPage, onNavigate }: { currentPage: PageKey; onNavigate: (key: PageKey) => void }) {
  return (
    <Card className="hero" size="3">
      <Flex direction="column" gap="4">
        <Flex justify="between" align="center" wrap="wrap" gap="3">
          <Box>
            <Badge size="3" color="indigo">
              BTS SIO SLAM — Portfolio
            </Badge>
            <Heading mt="2" size="8" className="hero-title">
              Vladimir Spirine
            </Heading>
            <Text color="gray">Développeur en alternance · Support applicatif · Automatisation</Text>
          </Box>
          <Button variant="solid" size="3" onClick={() => onNavigate('realisations')}>
            <RocketIcon /> Voir mes projets
          </Button>
        </Flex>

        <Flex wrap="wrap" gap="2" className="menu-wrap">
          {navItems.map((item) => (
            <Button
              key={item.key}
              variant={currentPage === item.key ? 'solid' : 'soft'}
              onClick={() => onNavigate(item.key)}
              className="menu-btn"
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}

function PresentationPage() {
  const blocks = [
    {
      title: 'Présentation',
      text: 'Étudiant en BTS SIO option SLAM, je travaille sur le développement web, la cybersécurité, l’analyse de tickets et l’optimisation de process métier.',
    },
    {
      title: 'Présentation de la formation',
      text: 'Le BTS SIO SLAM couvre le cycle complet de développement: analyse, conception, implémentation, tests, documentation et sécurité.',
    },
    {
      title: "Presentation de l'établissement",
      text: 'Campus Ermitage (Agen): accompagnement de proximité, rythme alterné, professionnalisation continue et suivi des compétences.',
    },
    {
      title: "Presentation de l'entreprise",
      text: 'SYADEM développe des solutions d’aide à la décision vaccinale. J’y contribue côté support, diagnostic, scripts d’outillage et qualité de données.',
    },
  ];

  return (
    <Grid columns={{ initial: '1', sm: '2' }} gap="3">
      {blocks.map((block) => (
        <Card size="3" key={block.title} className="section-card">
          <Heading size="4" mb="2">
            {block.title}
          </Heading>
          <Text color="gray">{block.text}</Text>
        </Card>
      ))}
    </Grid>
  );
}

function ParcoursPage() {
  return (
    <Grid columns={{ initial: '1', sm: '2' }} gap="3">
      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Parcours d’études</Heading>
        <Text>• BTS SIO SLAM — Campus Ermitage (2024–2026)</Text>
        <Text>• BTS Commerce International — Brunoy (2016–2018)</Text>
        <Text>• Bac S SVT — Évreux (2015–2016)</Text>
      </Card>

      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Parcours Professionnel</Heading>
        <Text>• Apprenti support / outillage — Syadem (depuis 2024)</Text>
        <Text>• Vendeur — Boulanger (2023)</Text>
        <Text>• Vendeur-technicien — Docteur IT (2021–2023)</Text>
      </Card>

      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Compétences</Heading>
        <Text>• Python, Ruby, SQL, MongoDB</Text>
        <Text>• HTML, CSS, JavaScript, React</Text>
        <Text>• Git/GitHub, scripts d’automatisation, support technique</Text>
      </Card>

      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Certifications & Récompenses</Heading>
        <Text>• Cisco: Introduction to Cybersecurity</Text>
        <Text>• Cisco: Python Essentials 1</Text>
        <Text>• Cisco: Networking Basics</Text>
        <Text>• REMPAR25 — certificat de participation</Text>
      </Card>
    </Grid>
  );
}

function RealisationsPage() {
  return (
    <Flex direction="column" gap="3">
      <Card className="section-card" size="3">
        <Flex align="center" gap="2" mb="2">
          <FileTextIcon />
          <Strong>Dossiers E5 & E6</Strong>
        </Flex>
        <Text color="gray" mb="2">
          Documents et preuves des compétences de conception/développement (E5) et support/exploitation (E6).
        </Text>
        <Flex gap="3" wrap="wrap">
          <Link href="/files/e5.pdf">E5 PDF</Link>
          <Link href="/files/e5.xlsx">E5 Excel</Link>
          <Link href="/files/e6.pdf">E6 PDF</Link>
          <Link href="/files/e6.xlsx">E6 Excel</Link>
        </Flex>
      </Card>

      <Card className="section-card" size="3">
        <Flex align="center" gap="2" mb="2">
          <CodeIcon />
          <Strong>Outil d'analyse de tickets</Strong>
        </Flex>
        <Text color="gray">
          Pipeline d’analyse de tickets: extraction, nettoyage, catégorisation, clustering et tableaux de bord pour priorisation opérationnelle.
        </Text>
      </Card>

      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Projet 2</Heading>
        <Text color="gray">Emplacement prêt pour votre second projet majeur (web / cybersécurité / data).</Text>
      </Card>
    </Flex>
  );
}

function VeillePage() {
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
            const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}&count=4`;
            const res = await fetch(endpoint);
            if (!res.ok) {
              throw new Error(String(res.status));
            }

            const data = await res.json();
            if (data.status !== 'ok' || !Array.isArray(data.items)) {
              throw new Error('Flux invalide');
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
          .slice(0, 10);

        setRssItems(merged);
      } catch {
        setError('Flux RSS indisponible pour le moment. Affichage des articles de secours.');
        setRssItems(fallbackRss);
      } finally {
        setLoading(false);
      }
    };

    void loadFeeds();
  }, []);

  return (
    <Card className="section-card" size="3">
      <Heading size="5" mb="2">Veille technologique (IA / cybersécurité)</Heading>
      <Text color="gray">Cette page est dédiée à la veille avec agrégation multi-sources RSS.</Text>
      <Separator size="4" my="3" />

      {loading && <Text>Chargement des flux…</Text>}
      {error && <Blockquote color="orange">{error}</Blockquote>}

      {!loading && (
        <Flex direction="column" gap="2">
          {rssItems.map((item) => (
            <Card key={`${item.title}-${item.pubDate}`} variant="surface">
              <Text weight="bold">{item.title}</Text>
              <Flex gap="2" mt="1" align="center" wrap="wrap">
                <Badge variant="soft">{item.source}</Badge>
                <Text size="1" color="gray">
                  {new Date(item.pubDate).toLocaleDateString('fr-FR')}
                </Text>
                <Link href={item.link} target="_blank" rel="noreferrer">
                  Ouvrir
                </Link>
              </Flex>
            </Card>
          ))}
        </Flex>
      )}
    </Card>
  );
}

function HomePage({ onNavigate }: { onNavigate: (key: PageKey) => void }) {
  return (
    <Card className="section-card" size="3">
      <Heading size="7" mb="2">
        Bienvenue
      </Heading>
      <Text color="gray" mb="3">
        Portfolio professionnel structuré en pages: Présentation, Parcours & compétences, Réalisations et Veille technologique.
      </Text>

      <Grid columns={{ initial: '1', sm: '2' }} gap="3">
        <Button size="3" onClick={() => onNavigate('presentation')}>
          <PersonIcon /> Ouvrir Présentation
        </Button>
        <Button size="3" onClick={() => onNavigate('parcours')}>
          <BackpackIcon /> Ouvrir Parcours
        </Button>
        <Button size="3" onClick={() => onNavigate('realisations')}>
          <RocketIcon /> Ouvrir Réalisations
        </Button>
        <Button size="3" onClick={() => onNavigate('veille')}>
          <GlobeIcon /> Ouvrir Veille
        </Button>
      </Grid>
    </Card>
  );
}

function Footer() {
  return (
    <Card className="footer" size="2">
      <Flex justify="between" align="center" wrap="wrap" gap="2">
        <Text size="2" color="gray">
          © 2026 Vladimir Spirine — BTS SIO SLAM
        </Text>
        <Flex gap="3" align="center">
          <Link href="#presentation">Présentation</Link>
          <Link href="#realisations">Réalisations</Link>
          <Link href="#veille">Veille</Link>
        </Flex>
      </Flex>
    </Card>
  );
}

export function App() {
  const [page, goTo] = useHashPage();

  const content = useMemo(() => {
    if (page === 'presentation') return <PresentationPage />;
    if (page === 'parcours') return <ParcoursPage />;
    if (page === 'realisations') return <RealisationsPage />;
    if (page === 'veille') return <VeillePage />;
    return <HomePage onNavigate={goTo} />;
  }, [goTo, page]);

  return (
    <Container size="4" p="4">
      <Flex direction="column" gap="4">
        <PortfolioHeader currentPage={page} onNavigate={goTo} />
        {content}
        <Footer />
      </Flex>
    </Container>
  );
}
