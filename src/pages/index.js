import React, { useEffect } from 'react';

import 'smooth-smooth-scroll/polyfill';
import { initSmoothScroll } from 'smooth-smooth-scroll';

import { FirstSection } from '../layouts/first-section/first-section.component';
import { AboutUsSection } from '../layouts/about-us-section/about-us-section.component';
import { GamesSection } from '../layouts/games-section/games-section.component';
import { GallerySection } from '../layouts/gallery-section/gallery-section.component';
import { FaqSection } from '../layouts/faq-section/faq-section.component';
import { PriceSection } from '../layouts/price-section/price-section.component';
import { PriceListSection } from '../layouts/price-list-section/price-list-section.component';

import SEO from '../components/seo';

const IndexPage = () => {
  useEffect(() => {
    const removeSmoothScroll = initSmoothScroll();

    return removeSmoothScroll;
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
