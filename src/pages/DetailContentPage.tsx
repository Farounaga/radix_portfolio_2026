import { ImageIcon } from '@radix-ui/react-icons';
import { Box, Button, Card, Flex, Heading, Separator, Table, Tabs, Text } from '@radix-ui/themes';
import { byKey } from '../data/content';
import type { ContentFlowNode, ContentRow, RouteKey } from '../types';

function SimpleTable({ rows }: { rows: ContentRow[] }) {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Champ</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Valeur</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={`${row.label}-${row.value}`}>
            <Table.RowHeaderCell>{row.label}</Table.RowHeaderCell>
            <Table.Cell>{row.value}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

function renderFlowNode(node: ContentFlowNode, idx: number) {
  if (node.type === 'text') {
    return (
      <Card key={`text-${idx}`} size="3">
        {node.heading && <Heading size="5" mb="2">{node.heading}</Heading>}
        <Flex direction="column" gap="2">
          {node.paragraphs.map((p, pIdx) => (
            <Text key={`${idx}-p-${pIdx}`} color="gray">{p}</Text>
          ))}
        </Flex>
      </Card>
    );
  }

  if (node.type === 'table') {
    return (
      <Card key={`table-${idx}`} size="3">
        {node.heading && <Heading size="5" mb="2">{node.heading}</Heading>}
        <Flex direction="column" gap="3">
          {node.tables.map((table, tIdx) => (
            <Box key={`${idx}-t-${tIdx}`}>
              <Text weight="bold" mb="2">{table.title}</Text>
              <SimpleTable rows={table.rows} />
            </Box>
          ))}
        </Flex>
      </Card>
    );
  }

  return (
    <Card key={`tabs-${idx}`} size="3">
      {node.heading && <Heading size="5" mb="2">{node.heading}</Heading>}
      <Tabs.Root defaultValue={node.tabs[0]?.label ?? 'onglet-1'}>
        <Tabs.List>
          {node.tabs.map((tab) => (
            <Tabs.Trigger key={tab.label} value={tab.label}>{tab.label}</Tabs.Trigger>
          ))}
        </Tabs.List>

        {node.tabs.map((tab) => (
          <Tabs.Content key={tab.label} value={tab.label} pt="3">
            <Flex direction="column" gap="2">
              {tab.paragraphs?.map((p, pIdx) => (
                <Text key={`${tab.label}-p-${pIdx}`} color="gray">{p}</Text>
              ))}

              {tab.tables?.map((table, tIdx) => (
                <Box key={`${tab.label}-t-${tIdx}`}>
                  <Separator size="4" my="2" />
                  <Text weight="bold" mb="2">{table.title}</Text>
                  <SimpleTable rows={table.rows} />
                </Box>
              ))}
            </Flex>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Card>
  );
}

export function DetailContentPage({ route, onBack }: { route: RouteKey; onBack: () => void }) {
  const item = byKey(route);
  if (!item) return null;

  const hasFlow = Array.isArray(item.flow) && item.flow.length > 0;
  const hasBlocks = Array.isArray(item.blocks) && item.blocks.length > 0;

  return (
    <Flex direction="column" gap="3">
      <Button variant="soft" onClick={onBack}>← Retour à la section</Button>

      <Card size="3">
        <Heading size="6" mb="2">{item.title}</Heading>
        <Text color="gray">{item.summary}</Text>
      </Card>

      {hasFlow ? (
        <Flex direction="column" gap="3">
          {item.flow!.map((node, idx) => renderFlowNode(node, idx))}
          <Card size="3">
            <Box className="image-placeholder">
              <ImageIcon width={32} height={32} />
              <Text>Image carrée responsive</Text>
            </Box>
          </Card>
        </Flex>
      ) : (
        <Tabs.Root defaultValue={hasBlocks ? 'sections' : 'texte'}>
          <Tabs.List>
            <Tabs.Trigger value="texte">Texte</Tabs.Trigger>
            <Tabs.Trigger value="tableau">Tableau</Tabs.Trigger>
            {hasBlocks && <Tabs.Trigger value="sections">Sections avancées</Tabs.Trigger>}
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
              <SimpleTable rows={item.table} />
            </Card>
          </Tabs.Content>

          {hasBlocks && (
            <Tabs.Content value="sections" pt="3">
              <Flex direction="column" gap="3">
                {item.blocks!.map((block) => (
                  <Card size="3" key={block.heading}>
                    <Heading size="5" mb="2">{block.heading}</Heading>
                    <Flex direction="column" gap="2">
                      {block.paragraphs.map((p) => (
                        <Text key={p} color="gray">{p}</Text>
                      ))}
                    </Flex>

                    {block.tables?.map((table, idx) => (
                      <Box key={`${table.title}-${idx}`} mt="3">
                        <Separator size="4" my="2" />
                        <Text weight="bold" mb="2">{table.title}</Text>
                        <SimpleTable rows={table.rows} />
                      </Box>
                    ))}
                  </Card>
                ))}
              </Flex>
            </Tabs.Content>
          )}

          <Tabs.Content value="image" pt="3">
            <Card size="3">
              <Box className="image-placeholder">
                <ImageIcon width={32} height={32} />
                <Text>Image carrée responsive</Text>
              </Box>
            </Card>
          </Tabs.Content>
        </Tabs.Root>
      )}
    </Flex>
  );
}
