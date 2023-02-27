/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import PropTypes from 'prop-types';
import React from 'react';
import Image from '../Image';
import './GenreDetail.css';

function GenreDetail({ genre }) {
  return (
    <div className="genreDetailContainer">
      <Image
        imagePath={`images/genre-${genre}`}
        imageExtension="png"
        defaultImagePath="images/genre-default"
        altText={genre}
        className="genreDetailImage"
      />
      <p className="genreDetailText">{genre}</p>
    </div>
  );
}

GenreDetail.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default GenreDetail;
