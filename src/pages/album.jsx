import React from 'react';

import { ExperementalSection } from '../components/album-page/experemental-section';

// TODO: refactor
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <div className="album-page">
      <SEO title="Album | Pantheon" />
      <ExperementalSection />
    </div>
  );
};

export default IndexPage;
