import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="recordsHeader">
      <p className="recordsHeaderText" data-testid="records-header-text">
        My
        <span className="recordsHeaderSpan">Record</span>
        Shelf
      </p>
    </header>
  );
}

export default Header;
