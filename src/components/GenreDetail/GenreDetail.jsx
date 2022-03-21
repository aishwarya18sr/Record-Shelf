import React from 'react';
import './GenreDetail.css';
import PropTypes from 'prop-types';
import bollywood from '../../assets/images/genre-bollywood.png';
import country from '../../assets/images/genre-country.png';
import pop from '../../assets/images/genre-pop.png';
import rock from '../../assets/images/genre-rock.png';

function GenreDetail({ genre }) {
  const getImage = () => {
    if (genre === 'bollywood') {
      return <img src={bollywood} alt="genreImage" />;
    }
    if (genre === 'country') {
      return <img src={country} alt="genreImage" />;
    }
    if (genre === 'pop') {
      return <img src={pop} alt="genreImage" />;
    }
    if (genre === 'rock') {
      return <img src={rock} alt="genreImage" />;
    }
    return null;
  };
  return (
    <div>
      {getImage()}
      <p>{genre}</p>
    </div>
  );
}

GenreDetail.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default GenreDetail;
