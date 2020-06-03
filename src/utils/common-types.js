import PropTypes from 'prop-types';

const fluidImageType = PropTypes.shape({
  img: PropTypes.shape({
    asset: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
});

const fixedImageType = PropTypes.shape({
  img: PropTypes.shape({
    asset: PropTypes.shape({
      fixed: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
});

export { fluidImageType, fixedImageType };
