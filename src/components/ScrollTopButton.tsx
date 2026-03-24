import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <IconButton
      size="3"
      radius="full"
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Remonter en haut"
    >
      <ArrowUpIcon />
    </IconButton>
  );
}
