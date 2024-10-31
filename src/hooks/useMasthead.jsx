import { useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FORBIDDEN_ZONE_CORRECTION = 3;

export const useMasthead = () => {
  const [mastheadEl, setMastheadEl] = useState(null);

  const pageOffsetTop = useMemo(() => {
    if (!mastheadEl) {
      return 0;
    }

    return mastheadEl.offsetHeight;
  }, [mastheadEl]);

  const [forbiddeZoneRef, isForbiddenMastheadZoneInView, entry] = useInView({
    rootMargin: `-${pageOffsetTop + FORBIDDEN_ZONE_CORRECTION}px 0px 0px 0px`,
  });
  const isHidden = isForbiddenMastheadZoneInView || !entry;

  return {
    pageOffsetTop,
    isHidden,
    forbiddeZoneRef,
    setMastheadEl,
  };
};
