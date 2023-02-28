import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SONGS_ROUTE } from '../../constants/routes';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const onButtonClickHandler = () => {
    navigate(SONGS_ROUTE);
  };
  return (
    <div className="homePageContainer">
      <p className="homePageText">:((</p>
      <p className="homePageText">seems a bit empty in here..</p>
      <button onClick={onButtonClickHandler} className="homePageButton" type="button">sync</button>
    </div>
  );
}

export default HomePage;
