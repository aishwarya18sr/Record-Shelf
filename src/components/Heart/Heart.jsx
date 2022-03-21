import './Heart.css';
import React from 'react';
import PropTypes from 'prop-types';
import heartRed from '../../assets/icons/heart-red.svg';
import heartGray from '../../assets/icons/heart-gray.svg';

function Heart({ isLiked, count, onClick }) {
  const getIcon = () => {
    if (isLiked === true) {
      return <img className="heartImage" src={heartRed} alt="heartRed" />;
    }
    if (isLiked === false) {
      return <img className="heartImage" src={heartGray} alt="heartGray" />;
    }
    return null;
  };

  const clickHandler = () => {
    onClick();
  };

  return (
    <div className="heartContainer">
      <button className="heartIcon" type="submit" onClick={clickHandler}>{getIcon()}</button>
      <p className="heartText">{count}</p>
    </div>
  );
}

Heart.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Heart;
