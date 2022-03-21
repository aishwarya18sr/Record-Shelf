/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import './SongsPage.css';
import Icon from '../../components/Icon/Icon';
import { RECORDS_URL } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest/makeRequest';
import AllCards from '../../components/AllCards/AllCards';
import { GENRES_ROUTE } from '../../constants/routes';

function SongsPage() {
  const [songsData, setSongsData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(RECORDS_URL).then((response) => { setSongsData(response.data); });
  }, []);

  const iconClickHandler = () => {
    navigate(GENRES_ROUTE);
  };

  if (songsData !== []) {
    return (
      <div>
        <Header />
        <div className="songspageMain">
          <div className="songspageHeading">
            <CategoryTitle categoryText="all songs" />
            <Icon icon="genre" onClick={iconClickHandler} />
          </div>
          <AllCards songsData={songsData} />
        </div>
      </div>
    );
  }
}

export default SongsPage;
