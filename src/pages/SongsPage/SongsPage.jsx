/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllCards from '../../components/AllCards/AllCards';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Icon from '../../components/Icon/Icon';
import { RECORDS_URL } from '../../constants/apiEndpoints';
import { GENRES_ROUTE } from '../../constants/routes';
import makeRequest from '../../utils/makeRequest/makeRequest';
import './SongsPage.css';

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
      <div className="songspageMain">
        <div className="songspageHeading">
          <CategoryTitle categoryText="all songs" />
          <Icon icon="genre" onClick={iconClickHandler} />
        </div>
        <AllCards songsData={songsData} />
      </div>
    );
  }
}

export default SongsPage;
