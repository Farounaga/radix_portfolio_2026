import { Card, Flex, Heading, Text } from '@radix-ui/themes';

export function HomePage() {
  return (
    <Flex direction="column" gap="3">
      <Card size="3">
        <Heading size="6" mb="2">Bienvenue</Heading>
        <Text color="gray">
          Utilisez les onglets du menu pour ouvrir chaque section.
        </Text>
      </Card>
    </Flex>
  );
}
