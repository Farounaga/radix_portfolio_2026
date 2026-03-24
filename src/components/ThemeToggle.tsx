import { Button } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggle({
  appearance,
  onToggle,
}: {
  appearance: 'light' | 'dark';
  onToggle: () => void;
}) {
  return (
    <Button variant="soft" size="3" onClick={onToggle}>
      {appearance === 'light' ? <MoonIcon /> : <SunIcon />}
      {appearance === 'light' ? 'Dark mode' : 'Light mode'}
    </Button>
  );
}
