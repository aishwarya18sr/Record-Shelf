/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { changeLikesUrl, getLikesUrl } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest/makeRequest';
import Heart from '../Heart/Heart';
import './Card.css';

function Card({
  songId, songName, artistName, imageUrl,
}) {
  const [songsLikes, setLikesData] = useState({});

  useEffect(() => {
    makeRequest(getLikesUrl(songId)).then((response) => {
      setLikesData(response.data);
    });
  }, []);

  const heartClickHandler = () => {
    makeRequest(changeLikesUrl(songId), {
      data: { like: !songsLikes.like },
    }).then((response) => {
      setLikesData(response.data);
    });
  };

  if (songsLikes !== {}) {
    return (
      <div className="cardContainer">
        <img className="cardImage" src={imageUrl} alt="songImage" />
        <div className="cardContent">
          <div className="cardText">
            <p className="cardSongName">{songName}</p>
            <p className="cardArtistName">{artistName}</p>
          </div>
          <Heart
            icon="heart"
            isLiked={songsLikes.like}
            count={songsLikes.count}
            onClick={heartClickHandler}
          />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  songId: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
