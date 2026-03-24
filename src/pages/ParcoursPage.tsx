import { Card, Grid, Heading, Text } from '@radix-ui/themes';

export function ParcoursPage() {
  return (
    <Grid columns={{ initial: '1', sm: '2' }} gap="3">
      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Parcours d’études</Heading>
        <Text>• BTS SIO SLAM — Campus Ermitage (2024–2026)</Text>
        <Text>• BTS Commerce International — Brunoy (2016–2018)</Text>
        <Text>• Bac S SVT — Évreux (2015–2016)</Text>
      </Card>

      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Parcours Professionnel</Heading>
        <Text>• Apprenti support / outillage — Syadem (depuis 2024)</Text>
        <Text>• Vendeur — Boulanger (2023)</Text>
        <Text>• Vendeur-technicien — Docteur IT (2021–2023)</Text>
      </Card>

      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Compétences</Heading>
        <Text>• Python, Ruby, SQL, MongoDB</Text>
        <Text>• HTML, CSS, JavaScript, React</Text>
        <Text>• Git/GitHub, scripts d’automatisation, support technique</Text>
      </Card>

      <Card className="section-card" size="3">
        <Heading size="4" mb="2">Certifications & Récompenses</Heading>
        <Text>• Cisco: Introduction to Cybersecurity</Text>
        <Text>• Cisco: Python Essentials 1</Text>
        <Text>• Cisco: Networking Basics</Text>
        <Text>• REMPAR25 — certificat de participation</Text>
      </Card>
    </Grid>
  );
}
