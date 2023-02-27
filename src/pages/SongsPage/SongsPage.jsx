/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllCards from '../../components/AllCards/AllCards';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import Icon from '../../components/Icon/Icon';
import { changeLikesUrl } from '../../constants/apiEndpoints';
import { GENRES_ROUTE } from '../../constants/routes';
import { getAllSongsData, updateAllSongsData } from '../../utils/common';
import makeRequest from '../../utils/makeRequest/makeRequest';
import './SongsPage.css';

function SongsPage() {
  const [allSongsData, setAllSongsData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllSongsData(setAllSongsData).then();
  }, []);

  const onHeartClickHandler = async (songId, songLike) => {
    const updatedLikedResponse = await makeRequest(changeLikesUrl(songId), {
      data: { like: !songLike },
    });
    updateAllSongsData(songId, updatedLikedResponse.data, allSongsData, setAllSongsData);
  };

  const iconClickHandler = () => {
    navigate(GENRES_ROUTE);
  };

  if (allSongsData[0]) {
    return (
      <div className="songspageMain">
        <div className="songspageHeading">
          <CategoryTitle categoryText="all songs" />
          <Icon icon="genre" onClick={iconClickHandler} />
        </div>
        <AllCards songsData={allSongsData} onHeartClickHandler={onHeartClickHandler} />
      </div>
    );
  }
  return <p>Loading...</p>;
}

export default SongsPage;
