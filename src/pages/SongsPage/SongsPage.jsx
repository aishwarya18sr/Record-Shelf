/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import './SongsPage.css';
import Icon from '../../components/Icon/Icon';
import { RECORDS_URL } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest/makeRequest';
import AllCards from '../../components/AllCards/AllCards';

function SongsPage() {
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    makeRequest(RECORDS_URL).then((response) => { setSongsData(response.data); });
  }, []);
  return (
    <div>
      <Header />
      <div className="songspageMain">
        <div className="songspageHeading">
          <CategoryTitle categoryText="all songs" />
          <Icon icon="genre" />
        </div>
        <AllCards songsData={songsData} />
      </div>
    </div>
  );
}

export default SongsPage;
