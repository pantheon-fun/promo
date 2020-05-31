import React, { useEffect, useRef } from 'react';
import { initSmoothScroll } from 'smooth-smooth-scroll';
import { useInView } from 'react-intersection-observer';

import { Masthead } from '../components/layout/masthead';
import { FirstSection } from '../components/index-page/first-section';
import { AboutUsSection } from '../components/index-page/about-us-section';
import { GamesSection } from '../components/index-page/games-section';
import { GallerySection } from '../components/index-page/gallery-section';
import { FaqSection } from '../components/index-page/faq-section';
import { PriceSection } from '../components/index-page/price-section';
import { PriceListSection } from '../components/index-page/price-list-section';
import { HowToFindSection } from '../components/index-page/how-to-find-section';
import { ReferenceSection } from '../components/index-page/reference-section';
import { Footer } from '../components/layout/footer';

// TODO: refactore
import SEO from '../components/seo';

const SMOOTH_SCROLL_CORRECTION = 3;

const IndexPage = () => {
  const mastheadRef = useRef(null);

  // TODO: Because of this stuff we have to rerender the whole page every time
  const [observerRef, firstSectionInView, entry] = useInView({
    rootMargin: `${mastheadRef.current ? -mastheadRef.current.offsetHeight : '0'}px 0px 0px 0px`,
  });

  useEffect(() => {
    const masthead = mastheadRef.current;

    if (masthead) {
      return initSmoothScroll({
        offsetTop: masthead.offsetHeight - SMOOTH_SCROLL_CORRECTION,
      });
    }

    return false;
  }, []);

  return (
    <div className="index-page">
      <SEO title="Pantheon" />
      <FirstSection sectionRef={observerRef} />
      <main className="page-home__content">
        <Masthead mastheadRef={mastheadRef} hidden={firstSectionInView || !entry} />
        <AboutUsSection />
        <GamesSection />
        <GallerySection />
        <FaqSection />
        <PriceSection />
        <PriceListSection />
        <HowToFindSection />
        <ReferenceSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
