import { Badge, Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { MoonIcon, RocketIcon, SunIcon } from '@radix-ui/react-icons';

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
        <Flex justify="between" align="start" wrap="wrap" gap="2">
          <Box>
            <Badge size="3" color="indigo">
              BTS SIO SLAM
            </Badge>
            <Heading mt="2" size="8">
              Vladimir Spirine — Portfolio
            </Heading>
            <Text color="gray">Développement • Cybersécurité • IA • Support applicatif</Text>
          </Box>

          <Flex gap="2" align="center">
            <Button variant="soft" onClick={onToggleTheme}>
              {appearance === 'light' ? <MoonIcon /> : <SunIcon />}
              {appearance === 'light' ? 'Dark' : 'Light'}
            </Button>
            <Button variant="solid">
              <RocketIcon /> Projets
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
