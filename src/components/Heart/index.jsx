import PropTypes from 'prop-types';
import React from 'react';
import Image from '../Image';
import './Heart.css';

function Heart({ isLiked, count, onClickHandler }) {
  return (
    <div className="heartContainer">
      <button className="heartIcon" type="button" onClick={onClickHandler} data-testid="heart-button">
        <Image
          imagePath={`icons/heart-${isLiked ? 'red' : 'gray'}`}
          imageExtension="svg"
          defaultImagePath="icons/heart-gray"
          altText={isLiked ? 'red-heart' : 'gray-heart'}
          className="heartImage"
        />
      </button>
      <p className="heartText">{count}</p>
    </div>
  );
}

Heart.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Heart;
