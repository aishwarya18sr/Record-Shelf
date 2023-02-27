/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import PropTypes from 'prop-types';
import React from 'react';
import './GenreDetail.css';

function GenreDetail({ genre }) {
  const getImage = () => {
    let genreImage;
    try {
      genreImage = require(`../../assets/images/genre-${genre}.png`);
    } catch (e) {
      genreImage = require('../../assets/images/genre-default.png');
    }
    return (
      <img
        className="genreDetailImage"
        src={genreImage}
        alt="genreImage"
      />
    );
  };
  return (
    <div className="genreDetailContainer">
      {getImage()}
      <p className="genreDetailText">{genre}</p>
    </div>
  );
}

GenreDetail.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default GenreDetail;
