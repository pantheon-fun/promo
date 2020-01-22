import React from 'react';

import { FirstSection } from '../layouts/first-section/first-section.component';

import SEO from '../components/seo';

const IndexPage = () => (
  <div className="index-page">
    <SEO title="Pantheon" />
    <FirstSection />
  </div>
);

export default IndexPage;
