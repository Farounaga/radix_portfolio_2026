import { useState } from 'react';
import { Container, Flex, Tabs, Theme } from '@radix-ui/themes';
import { Footer } from './components/Footer';
import { PortfolioHeader } from './components/PortfolioHeader';
import { ScrollTopButton } from './components/ScrollTopButton';
import { HomePage } from './pages/HomePage';
import { ParcoursPage } from './pages/ParcoursPage';
import { PresentationPage } from './pages/PresentationPage';
import { RealisationsPage } from './pages/RealisationsPage';
import { VeillePage } from './pages/VeillePage';
import type { PageKey } from './types';

export function App() {
  const [page, setPage] = useState<PageKey>('home');
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setAppearance((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Theme appearance={appearance} accentColor="indigo" grayColor="slate" radius="large" scaling="100%">
      <Container size="4" p="4">
        <Flex direction="column" gap="4">
          <PortfolioHeader appearance={appearance} onToggleTheme={toggleTheme} />

          <Tabs.Root value={page} onValueChange={(v) => setPage(v as PageKey)}>
            <Tabs.List size="2" className="top-menu">
              <Tabs.Trigger value="home">Accueil</Tabs.Trigger>
              <Tabs.Trigger value="presentation">Présentation</Tabs.Trigger>
              <Tabs.Trigger value="parcours">Parcours & compétences</Tabs.Trigger>
              <Tabs.Trigger value="realisations">Réalisations</Tabs.Trigger>
              <Tabs.Trigger value="veille">Veille technologique</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="home" pt="4">
              <HomePage onNavigate={setPage} />
            </Tabs.Content>
            <Tabs.Content value="presentation" pt="4">
              <PresentationPage />
            </Tabs.Content>
            <Tabs.Content value="parcours" pt="4">
              <ParcoursPage />
            </Tabs.Content>
            <Tabs.Content value="realisations" pt="4">
              <RealisationsPage />
            </Tabs.Content>
            <Tabs.Content value="veille" pt="4">
              <VeillePage />
            </Tabs.Content>
          </Tabs.Root>

          <Footer />
        </Flex>
      </Container>
      <ScrollTopButton />
    </Theme>
  );
}
