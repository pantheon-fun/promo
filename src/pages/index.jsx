import { make as SeoComponent } from '@/components/SeoComponent.bs';

import { config } from '@/Config.bs';

import css from './IndexPage.module.css';

const IndexPage = () => {
  return (
    <div className={css.page}>
      <SeoComponent
        title={config.siteMetadata.title}
        description={config.siteMetadata.description}
        siteName={config.siteMetadata.name}
      />
      <h1 className={css.heading}>Пантеон закрыт</h1>
    </div>
  );
};

export default IndexPage;
