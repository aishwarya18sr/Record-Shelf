/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import PropTypes from 'prop-types';
import React from 'react';

function Image({
  imagePath, defaultImagePath, imageExtension, altText, className
}) {
  const getImage = () => {
    let imageSrc;
    try {
      imageSrc = require(`../../assets/${imagePath}.${imageExtension}`);
    } catch (e) {
      imageSrc = require(`../../assets/${defaultImagePath}.${imageExtension}`);
    }
    return (
      <img
        data-testid={`${altText}-image`}
        className={className}
        src={imageSrc}
        alt={altText}
      />
    );
  };
  return (
    getImage()
  );
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Image;
