import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryTitle from '../../components/CategoryTitle';
import Icon from '../../components/Icon';
import AllCards from '../../components/SongCards';
import { UPDATE_LIKES_URL } from '../../constants/apiEndpoints';
import { GENRES_ROUTE } from '../../constants/routes';
import { getAllSongsData, updateAllSongsData } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import './SongsPage.css';

function SongsPage() {
  const [allSongsData, setAllSongsData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getAllSongsData(navigate).then(
      (allSongDetailsResponse) => {
        Promise.all(allSongDetailsResponse).then((allSongDetails) => {
          setAllSongsData(allSongDetails);
        });
      }
    );
  }, []);

  const onHeartClickHandler = async (songId, songLike) => {
    const updatedLikedResponse = await makeRequest(UPDATE_LIKES_URL(songId), navigate, {
      data: { like: !songLike }
    });
    updateAllSongsData(songId, updatedLikedResponse.data, allSongsData, setAllSongsData);
  };

  const onGenreIconClickHandler = () => {
    navigate(GENRES_ROUTE);
  };

  if (allSongsData) {
    return (
      <div className="songsPageMain">
        <div className="songsPageHeading">
          <CategoryTitle categoryText="all songs" />
          <Icon icon="genre" onClickHandler={onGenreIconClickHandler} />
        </div>
        <AllCards songsData={allSongsData} onHeartClickHandler={onHeartClickHandler} />
      </div>
    );
  }
  return <div className="songsPageLoaderContainer"><p>Loading...</p></div>;
}

export default SongsPage;
