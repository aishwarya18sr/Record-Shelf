import PropTypes from 'prop-types';
import React from 'react';
import SongCard from '../SongCard';
import './SongCards.css';

function SongCards({ songsData, onHeartClickHandler }) {
  return (
    <div className="songCardsContainer">
      {(songsData.length !== 0) && songsData.map(
        (eachSong) => (
          <SongCard
            key={eachSong.id}
            songData={eachSong}
            onHeartClickHandler={onHeartClickHandler}
          />
        )
      )}
    </div>
  );
}

SongCards.propTypes = {
  songsData: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      artist: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
      }),
      imageUrl: PropTypes.string,
      likeDetails: PropTypes.shape(
        {
          count: PropTypes.number,
          like: PropTypes.bool
        }
      )
    }
  )).isRequired,
  onHeartClickHandler: PropTypes.func.isRequired
};

export default SongCards;
