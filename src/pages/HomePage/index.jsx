import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SONGS_ROUTE } from '../../constants/routes';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(SONGS_ROUTE);
  };
  return (
    <div>
      <p className="homepageSimile">:((</p>
      <p className="homepageText">seems a bit empty in here..</p>
      <button onClick={clickHandler} className="homepageButton" type="submit">sync</button>
    </div>
  );
}

export default HomePage;
