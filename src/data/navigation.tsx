import type { JSX } from 'react';
import { BackpackIcon, GlobeIcon, HomeIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons';
import type { PageKey } from '../types';

export const navItems: Array<{ key: PageKey; label: string; icon: JSX.Element }> = [
  { key: 'home', label: 'Accueil', icon: <HomeIcon /> },
  { key: 'presentation', label: 'Présentation', icon: <PersonIcon /> },
  { key: 'parcours', label: 'Parcours & Compétences', icon: <BackpackIcon /> },
  { key: 'realisations', label: 'Réalisations', icon: <RocketIcon /> },
  { key: 'veille', label: 'Veille technologique', icon: <GlobeIcon /> },
];
