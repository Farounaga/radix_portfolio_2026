import { Card, Flex, Heading, Text } from '@radix-ui/themes';

export function HomePage() {
  return (
    <Flex direction="column" gap="3">
      <Card size="3">
        <Heading size="6" mb="2">Bienvenue</Heading>
        <Text color="gray">
          Utilisez les onglets du menu pour ouvrir chaque section. Ensuite cliquez sur une carte pour ouvrir une page détaillée avec placeholders (texte, tableau, image).
        </Text>
      </Card>
    </Flex>
  );
}
