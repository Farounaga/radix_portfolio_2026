import { useEffect, useMemo, useState } from 'react';
import { Badge, Blockquote, Button, Card, Flex, Heading, Link, Separator, Text } from '@radix-ui/themes';
import { ReloadIcon } from '@radix-ui/react-icons';
import { fallbackRss, feeds } from '../data/feeds';
import type { RssItem } from '../types';

type ParsedItem = { title: string; link: string; pubDate: string };

function parseRss(xml: string): ParsedItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');
  const nodes = Array.from(doc.querySelectorAll('item')).slice(0, 5);

  return nodes.map((item) => ({
    title: item.querySelector('title')?.textContent?.trim() || 'Sans titre',
    link: item.querySelector('link')?.textContent?.trim() || '#',
    pubDate: item.querySelector('pubDate')?.textContent?.trim() || new Date().toISOString(),
  }));
}

async function fetchFeed(url: string): Promise<string> {
  const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
  const res = await fetch(proxy);
  if (!res.ok) throw new Error(String(res.status));
  return res.text();
}

export function VeillePage() {
  const [rssItems, setRssItems] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadFeeds = async () => {
    try {
      setLoading(true);
      setError(null);

      const all = await Promise.all(
        feeds.map(async (feed) => {
          const xml = await fetchFeed(feed.url);
          return parseRss(xml).map((item) => ({ ...item, source: feed.name }));
        }),
      );

      const merged = all
        .flat()
        .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
        .slice(0, 12);

      if (merged.length === 0) throw new Error('empty');
      setRssItems(merged);
    } catch {
      setError('Impossible de récupérer les flux en direct. Affichage du mode secours.');
      setRssItems(fallbackRss);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadFeeds();
  }, []);

  const sourceCount = useMemo(() => new Set(rssItems.map((i) => i.source)).size, [rssItems]);

  return (
    <Flex direction="column" gap="3">
      <Card size="3">
        <Heading size="5" mb="2">Veille technologique</Heading>
        <Text color="gray">
          Objectif: suivre les évolutions en cybersécurité et IA, détecter les risques, et identifier les bonnes pratiques applicables en entreprise.
        </Text>
      </Card>

      <Card size="3">
        <Flex justify="between" align="center" wrap="wrap" gap="2">
          <Heading size="4">Flux RSS (live)</Heading>
          <Button variant="soft" onClick={() => void loadFeeds()}>
            <ReloadIcon /> Actualiser
          </Button>
        </Flex>
        <Separator my="3" size="4" />

        {loading && <Text>Chargement des flux…</Text>}
        {error && <Blockquote color="orange">{error}</Blockquote>}

        {!loading && (
          <>
            <Text size="2" color="gray" mb="2">{rssItems.length} articles • {sourceCount} sources</Text>
            <Flex direction="column" gap="2">
              {rssItems.map((item) => (
                <Card key={`${item.title}-${item.pubDate}`} variant="surface">
                  <Text weight="bold">{item.title}</Text>
                  <Flex gap="2" mt="1" align="center" wrap="wrap">
                    <Badge variant="soft">{item.source}</Badge>
                    <Text size="1" color="gray">{new Date(item.pubDate).toLocaleDateString('fr-FR')}</Text>
                    <Link href={item.link} target="_blank" rel="noreferrer">Lire</Link>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </>
        )}
      </Card>
    </Flex>
  );
}
