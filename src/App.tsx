import { useMemo, useState } from 'react';
import { Container, Flex, Theme } from '@radix-ui/themes';
import { Footer } from './components/Footer';
import { PortfolioHeader } from './components/PortfolioHeader';
import { useHashPage } from './hooks/useHashPage';
import { HomePage } from './pages/HomePage';
import { ParcoursPage } from './pages/ParcoursPage';
import { PresentationPage } from './pages/PresentationPage';
import { RealisationsPage } from './pages/RealisationsPage';
import { VeillePage } from './pages/VeillePage';

export function App() {
  const [page, goTo] = useHashPage();
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');

  const content = useMemo(() => {
    if (page === 'presentation') return <PresentationPage />;
    if (page === 'parcours') return <ParcoursPage />;
    if (page === 'realisations') return <RealisationsPage />;
    if (page === 'veille') return <VeillePage />;
    return <HomePage onNavigate={goTo} />;
  }, [goTo, page]);

  const toggleTheme = () => {
    setAppearance((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Theme appearance={appearance} accentColor="indigo" grayColor="mauve" radius="large" scaling="105%">
      <Container size="4" p="4">
        <Flex direction="column" gap="4">
          <PortfolioHeader currentPage={page} onNavigate={goTo} appearance={appearance} onToggleTheme={toggleTheme} />
          {content}
          <Footer />
        </Flex>
      </Container>
    </Theme>
  );
}
