import { CodeIcon, FileTextIcon } from '@radix-ui/react-icons';
import { Badge, Button, Card, Flex, Heading, Link, Separator, Strong, Text } from '@radix-ui/themes';

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
          <Link href="/files/Fiche_E5_SPIRINE.xlsx" download>Voir E5 (Excel)</Link>
          <Link href="/files/Fiche_E6_SPIRINE.docx" download>Voir E6 (Word)</Link>
        </Flex>
        <Flex gap="2" mt="3" wrap="wrap">
          <Button asChild variant="soft" size="2">
            <a href="/files/Fiche_E5_SPIRINE.xlsx" download="Fiche_E5_SPIRINE.xlsx">Télécharger Fiche E5</a>
          </Button>
          <Button asChild variant="soft" size="2">
            <a href="/files/Fiche_E6_SPIRINE.docx" download="Fiche_E6_SPIRINE.docx">Télécharger Fiche E6</a>
          </Button>
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
