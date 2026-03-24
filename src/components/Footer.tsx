import { Card, Flex, Link, Text } from '@radix-ui/themes';
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export function Footer() {
  return (
    <Card className="footer glass-card" size="2">
      <Flex justify="between" align="center" wrap="wrap" gap="3">
        <Text size="2" color="gray">
          © 2026 Vladimir Spirine — BTS SIO SLAM
        </Text>
        <Flex gap="3" align="center" wrap="wrap">
          <Link href="#presentation">Présentation</Link>
          <Link href="#realisations">Réalisations</Link>
          <Link href="#veille">Veille</Link>
        </Flex>
        <Flex gap="4" align="center" className="footer-socials">
          <Link href="https://github.com/Farounaga" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubLogoIcon width="18" height="18" />
            <Text size="2">GitHub</Text>
          </Link>
          <Link href="mailto:7h16ciolq@mozmail.com" aria-label="Email">
            <EnvelopeClosedIcon width="18" height="18" />
            <Text size="2">Email</Text>
          </Link>
          <Link href="https://www.linkedin.com/in/vladimir-spirine-184069173/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInLogoIcon width="18" height="18" />
            <Text size="2">LinkedIn</Text>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
}
