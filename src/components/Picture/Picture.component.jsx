import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React from 'react';

import { configuredSanityClient } from '@/externalAdapters/sanity';

const Picture = ({ picture, className, ...imageProps }) => {
  const sanityImageProps = useNextSanityImage(configuredSanityClient, picture.img);

  return (
    <div className={className}>
      <Image
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...sanityImageProps}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...imageProps}
        alt={picture.alt}
      />
    </div>
  );
};

export default React.memo(Picture);
