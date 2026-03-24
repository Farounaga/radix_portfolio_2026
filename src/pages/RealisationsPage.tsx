import { CodeIcon, FileTextIcon } from '@radix-ui/react-icons';
import { Card, Flex, Heading, Link, Strong, Text } from '@radix-ui/themes';

export function RealisationsPage() {
  return (
    <Flex direction="column" gap="3">
      <Card className="section-card" size="3">
        <Flex align="center" gap="2" mb="2">
          <FileTextIcon />
          <Strong>Dossiers E5 & E6</Strong>
        </Flex>
        <Text color="gray" mb="2">
          Documents et preuves des compétences de conception/développement (E5) et support/exploitation (E6).
        </Text>
        <Flex gap="3" wrap="wrap">
          <Link href="/files/e5.pdf">E5 PDF</Link>
          <Link href="/files/e5.xlsx">E5 Excel</Link>
          <Link href="/files/e6.pdf">E6 PDF</Link>
          <Link href="/files/e6.xlsx">E6 Excel</Link>
        </Flex>
      </Card>

      <Card className="section-card" size="3">
        <Flex align="center" gap="2" mb="2">
          <CodeIcon />
          <Strong>Outil d'analyse de tickets</Strong>
        </Flex>
        <Text color="gray">
          Pipeline d’analyse de tickets: extraction, nettoyage, catégorisation, clustering et tableaux de bord pour priorisation opérationnelle.
        </Text>
      </Card>

      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Projet 2</Heading>
        <Text color="gray">Emplacement prêt pour votre second projet majeur (web / cybersécurité / data).</Text>
      </Card>
    </Flex>
  );
}
