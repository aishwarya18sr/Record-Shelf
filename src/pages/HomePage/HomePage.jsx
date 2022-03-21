import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

function HomePage() {
  return (
    <div>
      <Header />
      <p className="homepageSimile">:((</p>
      <p className="homepageText">seems a bit empty in here..</p>
      <Button />
    </div>
  );
}

export default HomePage;
