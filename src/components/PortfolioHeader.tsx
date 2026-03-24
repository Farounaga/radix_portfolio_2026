import { Badge, Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { RocketIcon } from '@radix-ui/react-icons';
import { navItems } from '../data/navigation';
import type { PageKey } from '../types';
import { ThemeToggle } from './ThemeToggle';

export function PortfolioHeader({
  currentPage,
  onNavigate,
  appearance,
  onToggleTheme,
}: {
  currentPage: PageKey;
  onNavigate: (key: PageKey) => void;
  appearance: 'light' | 'dark';
  onToggleTheme: () => void;
}) {
  return (
    <Card className="hero" size="3">
      <Flex direction="column" gap="4">
        <Flex justify="between" align="center" wrap="wrap" gap="3">
          <Box>
            <Badge size="3" color="indigo">
              BTS SIO SLAM — Portfolio
            </Badge>
            <Heading mt="2" size="8" className="hero-title">
              Vladimir Spirine
            </Heading>
            <Text color="gray">Développeur en alternance · Support applicatif · Automatisation</Text>
          </Box>

          <Flex gap="2" wrap="wrap">
            <ThemeToggle appearance={appearance} onToggle={onToggleTheme} />
            <Button variant="solid" size="3" onClick={() => onNavigate('realisations')}>
              <RocketIcon /> Voir mes projets
            </Button>
          </Flex>
        </Flex>

        <Flex wrap="wrap" gap="2" className="menu-wrap">
          {navItems.map((item) => (
            <Button
              key={item.key}
              variant={currentPage === item.key ? 'solid' : 'soft'}
              onClick={() => onNavigate(item.key)}
              className="menu-btn"
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}
