import { useEffect, useRef, useState } from 'react';
import { Box, Text } from '@radix-ui/themes';
import lottie from 'lottie-web';

export function HeroAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      setError(true);
      return;
    }

    try {
      const anim = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/hero-lottie.json',
      });

      return () => anim.destroy();
    } catch {
      setError(true);
    }
  }, []);

  if (error) {
    return (
      <Box className="hero-lottie-fallback">
        <Text size="1" color="gray">Ajoutez votre fichier /public/hero-lottie.json</Text>
      </Box>
    );
  }

  return <Box ref={ref} className="hero-lottie" />;
}
