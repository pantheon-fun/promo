import PropTypes from 'prop-types';

export const fluidImageType = PropTypes.shape({
  img: PropTypes.shape({
    asset: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      fluid: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
});

export const fixedImageType = PropTypes.shape({
  img: PropTypes.shape({
    asset: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      fixed: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
});

export const pictureType = PropTypes.shape({
  // eslint-disable-next-line react/forbid-prop-types
  img: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
});
