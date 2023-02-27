/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import Heart from '../Heart/Heart';
import './Card.css';

function Card({
  songData, onHeartClickHandler,
}) {
  return (
    <div className="cardContainer">
      <img className="cardImage" src={songData.imageUrl} alt="songImage" />
      <div className="cardContent">
        <div className="cardText">
          <p className="cardSongName">{songData.name}</p>
          <p className="cardArtistName">{songData.artist.name}</p>
        </div>
        <Heart
          icon="heart"
          isLiked={songData.likeDetails.like}
          count={songData.likeDetails.count}
          onClick={() => { onHeartClickHandler(songData.id, songData.likeDetails.like); }}
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  songData: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      artist: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
      imageUrl: PropTypes.string,
      likeDetails: PropTypes.shape(
        {
          count: PropTypes.number,
          like: PropTypes.bool,
        },
      ),
    },
  ).isRequired,
  onHeartClickHandler: PropTypes.func.isRequired,
};

export default Card;
