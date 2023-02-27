import PropTypes from 'prop-types';
import React from 'react';
import './CategoryTitle.css';

function CategoryTitle({ categoryText }) {
  return (
    <p className="categoryText">{categoryText}</p>
  );
}

CategoryTitle.propTypes = {
  categoryText: PropTypes.string.isRequired
};

export default CategoryTitle;
