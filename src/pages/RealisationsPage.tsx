import { CodeIcon, FileTextIcon } from '@radix-ui/react-icons';
import { Badge, Card, Flex, Heading, Link, Separator, Strong, Text } from '@radix-ui/themes';

export function RealisationsPage() {
  return (
    <Flex direction="column" gap="3">
      <Card size="3">
        <Flex align="center" gap="2" mb="2">
          <FileTextIcon />
          <Heading size="5">Dossiers E5 & E6</Heading>
          <Badge variant="soft">BTS</Badge>
        </Flex>
        <Text color="gray">Dossiers officiels retraçant les compétences mobilisées en formation et en entreprise.</Text>
        <Separator my="3" size="4" />
        <Flex gap="3" wrap="wrap">
          <Link href="/files/e5.pdf">E5 PDF</Link>
          <Link href="/files/e5.xlsx">E5 Excel</Link>
          <Link href="/files/e6.pdf">E6 PDF</Link>
          <Link href="/files/e6.xlsx">E6 Excel</Link>
        </Flex>
      </Card>

      <Card size="3">
        <Flex align="center" gap="2" mb="2">
          <CodeIcon />
          <Strong>Outil d'analyse de tickets</Strong>
        </Flex>
        <Text color="gray" mb="2">
          Projet d’analyse de tickets (classification, regroupement, statistiques, suivi de tendances) pour améliorer la résolution et la priorisation.
        </Text>
      </Card>

      <Card size="3">
        <Heading size="5" mb="2">Projet 2</Heading>
        <Text color="gray">Section réservée à un second projet démontrant la conception, la sécurité et le déploiement.</Text>
      </Card>
    </Flex>
  );
}
