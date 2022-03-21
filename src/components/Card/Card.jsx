/* eslint-disable max-len */
import './Card.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Heart from '../Heart/Heart';
import makeRequest from '../../utils/makeRequest/makeRequest';
import { getLikesUrl, changeLikesUrl } from '../../constants/apiEndpoints';

function Card({
  songId, songName, artistName, imageUrl,
}) {
  const [songsLikes, setLikesData] = useState({});

  useEffect(() => {
    makeRequest(getLikesUrl(songId)).then((response) => { setLikesData(response.data); });
  }, []);

  const heartClickHandler = () => {
    let updatedCount = songsLikes.count;
    if (songsLikes.like) {
      updatedCount -= 1;
    } else {
      updatedCount += 1;
    }
    makeRequest(changeLikesUrl(songId), { data: { like: !songsLikes.like, count: updatedCount } }).then((response) => { setLikesData(response.data); });
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
          <Heart icon="heart" isLiked={songsLikes.like} count={songsLikes.count} onClick={heartClickHandler} />
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
