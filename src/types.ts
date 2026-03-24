export type MainPage = 'home' | 'presentation' | 'parcours' | 'realisations' | 'veille';
export type PageKey = MainPage;

export type RouteKey =
  | MainPage
  | 'presentation-intro'
  | 'presentation-formation'
  | 'presentation-etablissement'
  | 'presentation-entreprise'
  | 'parcours-etudes'
  | 'parcours-pro'
  | 'parcours-travail'
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

export type ContentRow = { label: string; value: string };
export type ContentTable = { title: string; rows: ContentRow[] };
export type ContentBlock = { heading: string; paragraphs: string[]; tables?: ContentTable[] };

export type FlowTextNode = { type: 'text'; heading?: string; paragraphs: string[] };
export type FlowTableNode = { type: 'table'; heading?: string; tables: ContentTable[] };
export type FlowTabsNode = {
  type: 'tabs';
  heading?: string;
  tabs: Array<{ label: string; paragraphs?: string[]; tables?: ContentTable[] }>;
};
export type ContentFlowNode = FlowTextNode | FlowTableNode | FlowTabsNode;

export type ContentItem = {
  key: RouteKey;
  section: MainPage;
  title: string;
  summary: string;
  paragraphs: string[];
  table: ContentRow[];
  blocks?: ContentBlock[];
  flow?: ContentFlowNode[];
};