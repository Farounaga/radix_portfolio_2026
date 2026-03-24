import { Card, Flex, Grid, Heading, Separator, Text } from '@radix-ui/themes';

export function ParcoursPage() {
  return (
    <Grid columns={{ initial: '1', md: '2' }} gap="3">
      <Card size="3">
        <Heading size="5">Parcours d’études</Heading>
        <Separator my="2" size="4" />
        <Flex direction="column" gap="2">
          <Text>• BTS SIO SLAM — Campus Ermitage (2024–2026)</Text>
          <Text>• BTS Commerce International — Brunoy (2016–2018)</Text>
          <Text>• Bac S SVT — Évreux (2015–2016)</Text>
        </Flex>
      </Card>

      <Card size="3">
        <Heading size="5">Parcours Professionnel</Heading>
        <Separator my="2" size="4" />
        <Flex direction="column" gap="2">
          <Text>• Apprenti support / outillage — Syadem</Text>
          <Text>• Vendeur — Boulanger</Text>
          <Text>• Vendeur-technicien — Docteur IT</Text>
          <Text>• Réceptionniste — Hôtel du Mont Doré</Text>
        </Flex>
      </Card>

      <Card size="3">
        <Heading size="5">Compétences</Heading>
        <Separator my="2" size="4" />
        <Flex direction="column" gap="2">
          <Text>• Python, Ruby, SQL, MongoDB</Text>
          <Text>• HTML/CSS/JavaScript, React</Text>
          <Text>• Git / GitHub, documentation et support</Text>
          <Text>• FR, RU, EN, ES</Text>
        </Flex>
      </Card>

      <Card size="3">
        <Heading size="5">Certifications & Récompenses</Heading>
        <Separator my="2" size="4" />
        <Flex direction="column" gap="2">
          <Text>• Cisco Introduction to Cybersecurity</Text>
          <Text>• Cisco Python Essentials 1</Text>
          <Text>• Cisco Networking Basics</Text>
          <Text>• REMPAR25 — certificat de participation</Text>
        </Flex>
      </Card>
    </Grid>
  );
}
