import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="recordsHeader">
      <p className="headerP">
        My
        {' '}
        <span className="headerSpan">Record</span>
        {' '}
        Shelf
      </p>
    </header>
  );
}

export default Header;
