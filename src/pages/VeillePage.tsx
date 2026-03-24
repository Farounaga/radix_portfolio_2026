import { useEffect, useState } from 'react';
import { Badge, Blockquote, Card, Flex, Heading, Link, Separator, Text } from '@radix-ui/themes';
import { fallbackRss, feeds } from '../data/feeds';
import type { RssItem } from '../types';

export function VeillePage() {
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
