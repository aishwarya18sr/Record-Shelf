import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Header from '../../components/Header/Header';
import { SONGS_ROUTE } from '../../constants/routes';

function HomePage() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(SONGS_ROUTE);
  };
  return (
    <div>
      <Header />
      <p className="homepageSimile">:((</p>
      <p className="homepageText">seems a bit empty in here..</p>
      <button onClick={clickHandler} className="homepageButton" type="submit">sync</button>
    </div>
  );
}

export default HomePage;
