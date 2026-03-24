import { ImageIcon } from '@radix-ui/react-icons';
import { Box, Button, Card, Flex, Heading, Table, Tabs, Text } from '@radix-ui/themes';
import { byKey } from '../data/content';
import type { RouteKey } from '../types';

export function DetailContentPage({ route, onBack }: { route: RouteKey; onBack: () => void }) {
  const item = byKey(route);
  if (!item) return null;

  return (
    <Flex direction="column" gap="3">
      <Button variant="soft" onClick={onBack}>← Retour à la section</Button>

      <Card size="3">
        <Heading size="6" mb="2">{item.title}</Heading>
        <Text color="gray">{item.summary}</Text>
      </Card>

      <Tabs.Root defaultValue="texte">
        <Tabs.List>
          <Tabs.Trigger value="texte">Texte</Tabs.Trigger>
          <Tabs.Trigger value="tableau">Tableau</Tabs.Trigger>
          <Tabs.Trigger value="image">Image placeholder</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="texte" pt="3">
          <Card size="3">
            <Flex direction="column" gap="3">
              {item.paragraphs.map((p) => (
                <Text key={p} color="gray">{p}</Text>
              ))}
            </Flex>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="tableau" pt="3">
          <Card size="3">
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Champ</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Valeur</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {item.table.map((row) => (
                  <Table.Row key={`${row.label}-${row.value}`}>
                    <Table.RowHeaderCell>{row.label}</Table.RowHeaderCell>
                    <Table.Cell>{row.value}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="image" pt="3">
          <Card size="3">
            <Box className="image-placeholder">
              <ImageIcon width={32} height={32} />
              <Text>Image carrée responsive</Text>
            </Box>
          </Card>
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
}
