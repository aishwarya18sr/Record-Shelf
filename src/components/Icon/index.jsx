import PropTypes from 'prop-types';
import React from 'react';
import Image from '../Image';
import './Icon.css';

function Icon({ icon, onClickHandler }) {
  return (
    <div className="iconContainer">
      <button className="commonIcon" type="submit" onClick={onClickHandler}>
        <Image
          imagePath={`icons/icon-${icon}`}
          imageExtension="svg"
          defaultImagePath="icons/icon-grid"
          altText={icon}
          className=""
        />

      </button>
    </div>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Icon;
