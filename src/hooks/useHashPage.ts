import { useEffect, useState } from 'react';
import { navItems } from '../data/navigation';
import type { PageKey } from '../types';

export function useHashPage(): [PageKey, (key: PageKey) => void] {
  const parse = () => {
    const hash = window.location.hash.replace('#', '');
    if (navItems.some((x) => x.key === hash)) {
      return hash as PageKey;
    }
    return 'home' as PageKey;
  };

  const [page, setPage] = useState<PageKey>(parse());

  useEffect(() => {
    const onHash = () => setPage(parse());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const goTo = (key: PageKey) => {
    window.location.hash = key;
  };

  return [page, goTo];
}
