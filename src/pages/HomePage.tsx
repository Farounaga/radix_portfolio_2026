import { BackpackIcon, GlobeIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons';
import { Button, Card, Grid, Heading, Text } from '@radix-ui/themes';
import type { PageKey } from '../types';

export function HomePage({ onNavigate }: { onNavigate: (key: PageKey) => void }) {
  return (
    <Card className="section-card" size="3">
      <Heading size="7" mb="2">
        Bienvenue
      </Heading>
      <Text color="gray" mb="3">
        Portfolio professionnel structuré en pages: Présentation, Parcours & compétences, Réalisations et Veille technologique.
      </Text>

      <Grid columns={{ initial: '1', sm: '2' }} gap="3">
        <Button size="3" onClick={() => onNavigate('presentation')}>
          <PersonIcon /> Ouvrir Présentation
        </Button>
        <Button size="3" onClick={() => onNavigate('parcours')}>
          <BackpackIcon /> Ouvrir Parcours
        </Button>
        <Button size="3" onClick={() => onNavigate('realisations')}>
          <RocketIcon /> Ouvrir Réalisations
        </Button>
        <Button size="3" onClick={() => onNavigate('veille')}>
          <GlobeIcon /> Ouvrir Veille
        </Button>
      </Grid>
    </Card>
  );
}
