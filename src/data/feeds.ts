import type { RssItem } from '../types';

export const feeds = [
  { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews' },
  { name: 'BleepingComputer', url: 'https://www.bleepingcomputer.com/feed/' },
  { name: 'MIT Technology Review AI', url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed/' },
];

export const fallbackRss: RssItem[] = [
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
