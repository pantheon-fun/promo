import React, { useEffect } from 'react';

import 'smooth-smooth-scroll/polyfill';
import { initSmoothScroll } from 'smooth-smooth-scroll';

import { FirstSection } from '../layouts/first-section';
import { AboutUsSection } from '../layouts/about-us-section';
import { GamesSection } from '../layouts/games-section';
import { GallerySection } from '../layouts/gallery-section';
import { FaqSection } from '../layouts/faq-section';
import { PriceSection } from '../layouts/price-section';
import { PriceListSection } from '../layouts/price-list-section';

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
      </main>
    </div>
  );
};

export default IndexPage;
