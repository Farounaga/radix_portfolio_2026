export type MainPage = 'home' | 'presentation' | 'parcours' | 'realisations' | 'veille';

export type RouteKey =
  | MainPage
  | 'presentation-intro'
  | 'presentation-formation'
  | 'presentation-etablissement'
  | 'presentation-entreprise'
  | 'parcours-etudes'
  | 'parcours-pro'
  | 'parcours-competences'
  | 'parcours-certifications'
  | 'realisations-e5e6'
  | 'realisations-tickets'
  | 'realisations-projet2';

export type RssItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
};

export type ContentItem = {
  key: RouteKey;
  section: MainPage;
  title: string;
  summary: string;
  paragraphs: string[];
  table: Array<{ label: string; value: string }>;
};
