import { Card, Grid, Heading, Text } from '@radix-ui/themes';

const blocks = [
  {
    title: 'Présentation',
    text: 'Étudiant en BTS SIO option SLAM, je travaille sur le développement web, la cybersécurité, l’analyse de tickets et l’optimisation de process métier.',
  },
  {
    title: 'Présentation de la formation',
    text: 'Le BTS SIO SLAM couvre le cycle complet de développement: analyse, conception, implémentation, tests, documentation et sécurité.',
  },
  {
    title: "Presentation de l'établissement",
    text: 'Campus Ermitage (Agen): accompagnement de proximité, rythme alterné, professionnalisation continue et suivi des compétences.',
  },
  {
    title: "Presentation de l'entreprise",
    text: 'SYADEM développe des solutions d’aide à la décision vaccinale. J’y contribue côté support, diagnostic, scripts d’outillage et qualité de données.',
  },
];

export function PresentationPage() {
  return (
    <Grid columns={{ initial: '1', sm: '2' }} gap="3">
      {blocks.map((block) => (
        <Card size="3" key={block.title} className="section-card">
          <Heading size="4" mb="2">
            {block.title}
          </Heading>
          <Text color="gray">{block.text}</Text>
        </Card>
      ))}
    </Grid>
  );
}
