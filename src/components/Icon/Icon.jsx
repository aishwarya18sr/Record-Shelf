import './Icon.css';
import React from 'react';
import PropTypes from 'prop-types';
import iconGenre from '../../assets/icons/icon-genre.svg';
import iconGrid from '../../assets/icons/icon-grid.svg';

function Icon({ icon, onClick }) {
  const getIcon = () => {
    if (icon === 'genre') {
      return <img src={iconGenre} alt="genreIcon" />;
    }
    if (icon === 'grid') {
      return <img src={iconGrid} alt="gridIcon" />;
    }
    return null;
  };

  const clickHandler = () => {
    onClick();
  };

  return (
    <div className="iconContainer">
      <button className="commonIcon" type="submit" onClick={clickHandler}>{getIcon()}</button>
    </div>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Icon;
