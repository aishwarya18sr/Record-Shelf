/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card/Card';
import './AllCards.css';

function AllCards({ songsData, onHeartClickHandler }) {
  return (
    <div className="allCardsContainer">
      {(songsData.length !== 0) ? songsData.map((eachSong) => <Card key={eachSong.id} songData={eachSong} onHeartClickHandler={onHeartClickHandler} />) : <p />}
    </div>
  );
}

AllCards.propTypes = {
  songsData: PropTypes.arrayOf(PropTypes.shape(
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
  )).isRequired,
  onHeartClickHandler: PropTypes.func.isRequired,
};

export default AllCards;
