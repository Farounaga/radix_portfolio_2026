import { BackpackIcon, GlobeIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons';
import { Button, Callout, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import type { PageKey } from '../types';

export function HomePage({ onNavigate }: { onNavigate: (key: PageKey) => void }) {
  return (
    <Flex direction="column" gap="3">
      <Callout.Root>
        <Callout.Text>
          Portfolio structuré selon les attendus BTS SIO: sections complètes, sous-parties détaillées et page dédiée de veille technologique.
        </Callout.Text>
      </Callout.Root>

      <Card size="3">
        <Heading size="6" mb="2">Navigation rapide</Heading>
        <Grid columns={{ initial: '1', sm: '2' }} gap="3">
          <Button size="3" onClick={() => onNavigate('presentation')}>
            <PersonIcon /> Présentation
          </Button>
          <Button size="3" onClick={() => onNavigate('parcours')}>
            <BackpackIcon /> Parcours & compétences
          </Button>
          <Button size="3" onClick={() => onNavigate('realisations')}>
            <RocketIcon /> Réalisations
          </Button>
          <Button size="3" onClick={() => onNavigate('veille')}>
            <GlobeIcon /> Veille technologique
          </Button>
        </Grid>
      </Card>

      <Card size="3">
        <Heading size="5" mb="2">Objectif</Heading>
        <Text color="gray">
          Montrer un profil complet (formation, entreprise, compétences, projets et veille) dans une interface claire et professionnelle.
        </Text>
      </Card>
    </Flex>
  );
}
