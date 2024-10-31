import { useEffect } from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';

import { config } from '@/Config.bs.js';

const isServer = typeof window === 'undefined';
const isProduction = process.env.NODE_ENV === 'production';
const isYMEnabled = !isServer && isProduction;

export const hit = (url) => {
  if (isYMEnabled) {
    ym('hit', url);
  }
};

export const YMScript = () => {
  useEffect(() => {
    if (isYMEnabled) {
      const url = window.location.pathname + window.location.search;
      ym('hit', url);
    }
  }, []);

  if (!isYMEnabled) {
    return null;
  }

  return (
    <YMInitializer
      accounts={[Number(config.ym.trackingId)]}
      options={config.ym.options}
      version="2"
    />
  );
};
