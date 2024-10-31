import { useEffect, useState } from 'react';

export const useMainScreenHeight = () => {
  const [mainScreenHeight, setMainScreenHeight] = useState('100vh');

  useEffect(() => {
    const correctSizing = () => {
      setMainScreenHeight(window.innerHeight);
    };

    const onOrientationchange = () => {
      window.addEventListener('resize', correctSizing, { once: true });
    };

    correctSizing();
    window.addEventListener('orientationchange', onOrientationchange);

    return () => {
      return window.removeEventListener('orientationchange', onOrientationchange);
    };
  }, []);

  return mainScreenHeight;
};
