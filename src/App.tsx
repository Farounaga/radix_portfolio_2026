import { useEffect, useMemo, useState } from 'react';
import { Container, Flex, Tabs, Theme } from '@radix-ui/themes';
import { Footer } from './components/Footer';
import { PortfolioHeader } from './components/PortfolioHeader';
import { ScrollTopButton } from './components/ScrollTopButton';
import { DetailContentPage } from './pages/DetailContentPage';
import { HomePage } from './pages/HomePage';
import { SectionOverviewPage } from './pages/SectionOverviewPage';
import { VeillePage } from './pages/VeillePage';
import type { MainPage, RouteKey } from './types';

function parentOfRoute(route: RouteKey): MainPage {
  if (route.startsWith('presentation-')) return 'presentation';
  if (route.startsWith('parcours-')) return 'parcours';
  if (route.startsWith('realisations-')) return 'realisations';
  if (route === 'veille') return 'veille';
  return route as MainPage;
}

export function App() {
  const [route, setRoute] = useState<RouteKey>('home');
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');

  const parent = parentOfRoute(route);

  const toggleTheme = () => {
    setAppearance((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.dataset.theme = appearance;
  }, [appearance]);

  const content = useMemo(() => {
    if (route === 'home') return <HomePage />;
    if (route === 'veille') return <VeillePage />;
    if (route.startsWith('presentation-') || route.startsWith('parcours-') || route.startsWith('realisations-')) {
      return <DetailContentPage route={route} onBack={() => setRoute(parent)} />;
    }
    return <SectionOverviewPage section={route as MainPage} onOpen={setRoute} />;
  }, [parent, route]);

  return (
    <Theme appearance={appearance} accentColor="indigo" grayColor="slate" radius="large" scaling="100%">
      <Container size="4" p="4">
        <Flex direction="column" gap="4">
          <Tabs.Root value={parent} onValueChange={(v) => setRoute(v as MainPage)}>
            <Tabs.List size="2" className="top-menu">
              <Tabs.Trigger value="home">Accueil</Tabs.Trigger>
              <Tabs.Trigger value="presentation">Présentation</Tabs.Trigger>
              <Tabs.Trigger value="parcours">Parcours & compétences</Tabs.Trigger>
              <Tabs.Trigger value="realisations">Réalisations</Tabs.Trigger>
              <Tabs.Trigger value="veille">Veille technologique</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          <PortfolioHeader appearance={appearance} onToggleTheme={toggleTheme} />

          {content}
          <Footer />
        </Flex>
      </Container>
      <ScrollTopButton />
    </Theme>
  );
}
