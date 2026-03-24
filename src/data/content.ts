import type { MainPage, RouteKey } from '../types';
import { parcoursContent } from '../content/parcours';
import { presentationContent } from '../content/presentation';
import { realisationsContent } from '../content/realisations';

export const contentItems = [...presentationContent, ...parcoursContent, ...realisationsContent];

export const bySection = (section: MainPage) => contentItems.filter((x) => x.section === section);

export const byKey = (key: RouteKey) => contentItems.find((x) => x.key === key);
