import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';

function Card({
  songName, artistName, imageUrl,
}) {
  return (
    <div className="cardContainer">
      <img className="cardImage" src={imageUrl} alt="songImage" />
      <div className="cardText">
        <p className="cardSongName">{songName}</p>
        <p className="cardArtistName">{artistName}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  // songId: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
