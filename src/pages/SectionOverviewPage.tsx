import { Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { bySection } from '../data/content';
import type { MainPage, RouteKey } from '../types';

export function SectionOverviewPage({ section, onOpen }: { section: MainPage; onOpen: (key: RouteKey) => void }) {
  const items = bySection(section);

  return (
    <Grid columns={{ initial: '1', sm: '2' }} gap="3">
      {items.map((item) => (
        <Card key={item.key} size="3" onClick={() => onOpen(item.key)} className="card-clickable">
          <Flex direction="column" gap="2">
            <Heading size="4">{item.title}</Heading>
            <Text color="gray">{item.summary}</Text>
            <Text size="1" color="gray">Cliquer pour ouvrir la page détaillée →</Text>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
