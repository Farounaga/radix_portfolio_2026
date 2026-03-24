import { Badge, Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { HeroAnimation } from './HeroAnimation';

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
          <HeroAnimation />
          <Box>
            <Heading size="6">Vladimir Spirine</Heading>
            <Text color="gray">Etudiant en BTS SIO SLAM • Support & developpeur chez Syadem </Text>
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
}
