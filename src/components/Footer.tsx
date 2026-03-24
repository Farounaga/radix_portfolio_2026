import { Card, Flex, Link, Text } from '@radix-ui/themes';

export function Footer() {
  return (
    <Card className="footer" size="2">
      <Flex justify="between" align="center" wrap="wrap" gap="2">
        <Text size="2" color="gray">
          © 2026 Vladimir Spirine — BTS SIO SLAM
        </Text>
        <Flex gap="3" align="center">
          <Link href="#presentation">Présentation</Link>
          <Link href="#realisations">Réalisations</Link>
          <Link href="#veille">Veille</Link>
        </Flex>
      </Flex>
    </Card>
  );
}
