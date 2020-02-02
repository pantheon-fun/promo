import React from 'react';

import { FirstSection } from '../layouts/first-section/first-section.component';
import { AboutUsSection } from '../layouts/about-us-section/about-us-section.component';
import { GamesSection } from '../layouts/games-section/games-section.component';

import SEO from '../components/seo';

const IndexPage = () => (
  <div className="index-page">
    <SEO title="Pantheon" />
    <FirstSection />
    <main className="page-home__content">
      <AboutUsSection />
      <GamesSection />
    </main>
  </div>
);

export default IndexPage;
