import React, { useEffect } from 'react';

// Polyfills
import 'intersection-observer';
import 'smooth-smooth-scroll/polyfill';
import { initSmoothScroll } from 'smooth-smooth-scroll';

import { FirstSection } from '../components/index-page/first-section';
import { AboutUsSection } from '../components/index-page/about-us-section';
import { GamesSection } from '../components/index-page/games-section';
import { GallerySection } from '../components/index-page/gallery-section';
import { FaqSection } from '../components/index-page/faq-section';
import { PriceSection } from '../components/index-page/price-section';
import { PriceListSection } from '../components/index-page/price-list-section';
import { HowToFindSection } from '../components/index-page/how-to-find-section';

// TODO: refactore
import SEO from '../components/seo';

const IndexPage = () => {
  useEffect(() => {
    return initSmoothScroll();
  }, []);

  return (
    <div className="index-page">
      <SEO title="Pantheon" />
      <FirstSection />
      <main className="page-home__content">
        <AboutUsSection />
        <GamesSection />
        <GallerySection />
        <FaqSection />
        <PriceSection />
        <PriceListSection />
        <HowToFindSection />
      </main>
    </div>
  );
};

export default IndexPage;
