import { Button, Card, Flex, Heading, Text, TextArea, TextField } from '@radix-ui/themes';

export function HomePage() {
  return (
    <Flex direction="column" gap="4">
      <Card size="3" className="glass-card">
        <Heading size="6" mb="2">Bienvenue</Heading>
        <Text color="gray">
          Utilisez les onglets du menu pour ouvrir chaque section.
        </Text>
      </Card>

      <Card size="3" className="glass-card">
        <Heading size="5" mb="3">Contact</Heading>
        <form className="contact-form" action="mailto:7h16ciolq@mozmail.com" method="post" encType="text/plain">
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" color="gray">Nom</Text>
              <TextField.Root name="name" placeholder="Votre nom" required />
            </label>
            <label>
              <Text as="div" size="2" mb="1" color="gray">Email</Text>
              <TextField.Root name="email" type="email" placeholder="vous@email.com" required />
            </label>
            <label>
              <Text as="div" size="2" mb="1" color="gray">Message</Text>
              <TextArea name="message" placeholder="Votre message..." required />
            </label>
            <Flex justify="end">
              <Button type="submit">Envoyer</Button>
            </Flex>
          </Flex>
        </form>
      </Card>
    </Flex>
  );
}
