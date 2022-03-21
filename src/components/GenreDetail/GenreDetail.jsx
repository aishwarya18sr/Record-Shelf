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
      return <img className="genreDetailImage" src={bollywood} alt="genreImage" />;
    }
    if (genre === 'country') {
      return <img className="genreDetailImage" src={country} alt="genreImage" />;
    }
    if (genre === 'pop') {
      return <img className="genreDetailImage" src={pop} alt="genreImage" />;
    }
    if (genre === 'rock') {
      return <img className="genreDetailImage" src={rock} alt="genreImage" />;
    }
    return null;
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
