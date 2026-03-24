import { Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';

const sections = [
  {
    title: 'Présentation',
    body: [
      'Je suis Vladimir Spirine, étudiant en BTS SIO SLAM et alternant chez Syadem.',
      'Centres d’intérêt: développement applicatif, cybersécurité, automatisation et IA.',
    ],
  },
  {
    title: 'Présentation de la formation',
    body: [
      'Le BTS SIO SLAM prépare à la conception, au développement, au déploiement et au maintien des solutions logicielles.',
      'Le cursus couvre analyse des besoins, SQL, web, pratiques de sécurité, tests et gestion de projet.',
    ],
  },
  {
    title: "Presentation de l'établissement",
    body: [
      'Campus Ermitage (Agen): formation en alternance, encadrement régulier et progression orientée compétences.',
      'Le rythme école/entreprise favorise la professionnalisation continue.',
    ],
  },
  {
    title: "Presentation de l'entreprise",
    body: [
      'SYADEM propose des outils d’aide à la décision vaccinale (MesVaccins, Colibri, NUVA).',
      'Missions: support applicatif, traitement des incidents, qualité de données, scripts d’outillage interne.',
    ],
  },
];

export function PresentationPage() {
  return (
    <Grid columns={{ initial: '1', md: '2' }} gap="3">
      {sections.map((s) => (
        <Card key={s.title} size="3">
          <Heading size="5" mb="2">{s.title}</Heading>
          <Flex direction="column" gap="2">
            {s.body.map((line) => (
              <Text key={line} color="gray">{line}</Text>
            ))}
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
