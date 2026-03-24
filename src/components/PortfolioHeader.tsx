import { Badge, Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function PortfolioHeader({
  appearance,
  onToggleTheme,
}: {
  appearance: 'light' | 'dark';
  onToggleTheme: () => void;
}) {
  return (
    <Card className="hero" size="3">
      <Flex direction="column" gap="3">
        <Flex justify="between" align="center" wrap="wrap" gap="3">
          <Badge size="3" color="indigo">Portfolio BTS SIO SLAM</Badge>
          <Button variant="soft" onClick={onToggleTheme}>
            {appearance === 'light' ? <MoonIcon /> : <SunIcon />}
            {appearance === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>

        <Flex gap="3" align="center" wrap="wrap">
          <Box className="hero-image-placeholder">
            <Text size="1" color="gray">Photo</Text>
          </Box>
          <Box>
            <Heading size="6">Vladimir Spirine</Heading>
            <Text color="gray">Développement • Cybersécurité • IA • Support applicatif</Text>
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
}
