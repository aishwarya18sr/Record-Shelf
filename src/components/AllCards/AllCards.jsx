/* eslint-disable max-len */
import React from 'react';
import './AllCards.css';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

function AllCards({ songsData }) {
  return (
    <div className="allCardsContainer">
      {(songsData.length !== 0) ? songsData.map((eachSong) => <Card key={eachSong.id} songId={eachSong.id} songName={eachSong.name} artistName={eachSong.artist.name} imageUrl={eachSong.imageUrl} />) : <p />}
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
    },
  )).isRequired,
};

export default AllCards;
