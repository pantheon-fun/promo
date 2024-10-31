import { useEffect } from 'react';
import { initSmoothScroll } from 'smooth-smooth-scroll';

import { GallerySection } from '@/components/indexPage/GallerySection';
import { HowToFindSection } from '@/components/indexPage/HowToFindSection';
import { make as IndexPageAboutUs } from '@/components/indexPage/IndexPageAboutUs.bs';
import { make as IndexPageFaq } from '@/components/indexPage/IndexPageFaq.bs';
import { make as IndexPagePackPricesSection } from '@/components/indexPage/IndexPagePackPricesSection.bs';
import { make as IndexPagePricesInfo } from '@/components/indexPage/IndexPagePricesInfo.bs';
import { make as IndexPageReservation } from '@/components/indexPage/IndexPageReservation.bs';
import { MainSection } from '@/components/indexPage/MainSection';
import { PriceSection } from '@/components/indexPage/PriceSection';
import { ReferenceSection } from '@/components/indexPage/ReferenceSection';
import { ReviewsWidgetSection } from '@/components/indexPage/ReviewsWidgetSection';
import { Footer } from '@/components/layout/Footer';
import { Masthead } from '@/components/layout/Masthead';
import { make as SeoComponent } from '@/components/SeoComponent.bs';

import { useMasthead } from '@/hooks/useMasthead';

import { config } from '@/Config.bs';
import { configuredSanityClient } from '@/externalAdapters/sanity';

import * as IndexPageContent from '../utils/IndexPageContent.bs.js';

import css from './IndexPage.module.css';

const PageContentProvider = IndexPageContent.Provider.make;

const query = `
{
  "references": *[_type == "references"] {
    address,
    detailedRouteLink,
    devLink,
    email,
    instLink,
    telNumber,
    vkLink,
    ymapLink,
    ymapScript
  }[0],
  "mainSection": *[_type == "mainSection"] {
    siteTitle,
    mainReservationButton,
    hints,
    siteLogo->{img, alt},
    carousel[]->{img, alt}
  }[0],
  "aboutUsSection": *[_type == "aboutUsSection"] {
    heading,
    text
  }[0],
  "gamesSection": *[_type == "gamesSection"] {
    heading,
    gameCards[]{
      icon->{img, alt},
      title,
      description
    }
  }[0],
  "gallerySection": *[_type == "gallerySection"] {
    heading,
    galleryImages[]->{img, alt},
    albumBtn{
      text,
      url,
    },
  }[0],
  "faqSection": *[_type == "faqSection"] {
    heading,
    faq[]{
      question,
      answer,
    },
  }[0],
  "priceSection": *[_type == "priceSection"] {
    heading,
    pricePluses[]{
      plus,
      description,
    },
    backgroundImage->{img, alt}
  }[0],
  "priceListSection": *[_type == "priceListSection"] {
    priceDetails,
    specialOffers[]{
      offerBody,
      offerName,
    },
  }[0],
  "privacyPolicy": *[_type == "privacyPolicy"] {
    privacyPolicyContent
  }[0],
}
`;

const IndexPage = ({ pageContent }) => {
  const mastheadInstance = useMasthead();

  useEffect(() => {
    return initSmoothScroll({
      offsetTop: mastheadInstance.pageOffsetTop,
    });
  }, [mastheadInstance.pageOffsetTop]);

  return (
    <PageContentProvider pageContent={pageContent}>
      <div className={css.page}>
        <SeoComponent
          title={config.siteMetadata.title}
          description={config.siteMetadata.description}
          siteName={config.siteMetadata.name}
        />
        <MainSection mastheadForbiddenZoneRef={mastheadInstance.forbiddeZoneRef} />
        <main className="page-home__content">
          <Masthead
            isHidden={mastheadInstance.isHidden}
            setMastheadEl={mastheadInstance.setMastheadEl}
          />
          <IndexPageAboutUs id="about-us-section" />
          <GallerySection />
          <IndexPageFaq id="faq-section" />
          <PriceSection />
          <IndexPagePricesInfo id="prices-info-section" />
          <IndexPagePackPricesSection />
          <IndexPageReservation id="reservation-section" />
          <ReviewsWidgetSection />
          <HowToFindSection />
          <ReferenceSection />
        </main>
        <Footer />
      </div>
    </PageContentProvider>
  );
};

export const getStaticProps = async () => {
  const pageContent = await configuredSanityClient.fetch(query);

  return {
    props: { pageContent },
  };
};

export default IndexPage;
