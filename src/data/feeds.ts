import type { RssItem } from '../types';

export const feeds = [
  { name: 'TechRadar', url: 'https://www.techradar.com/rss' },
];

export const fallbackRss: RssItem[] = [
  {
    title: 'TechRadar RSS indisponible: article de secours 1',
    link: 'https://www.techradar.com/',
    pubDate: '2026-03-20',
    source: 'TechRadar',
  },
  {
    title: 'TechRadar RSS indisponible: article de secours 2',
    link: 'https://www.techradar.com/',
    pubDate: '2026-03-18',
    source: 'TechRadar',
  },
];
