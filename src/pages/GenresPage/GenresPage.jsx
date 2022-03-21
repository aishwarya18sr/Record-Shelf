/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import './GenresPage.css';
import Icon from '../../components/Icon/Icon';
import { RECORDS_URL } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest/makeRequest';
import AllCards from '../../components/AllCards/AllCards';
import { SONGS_ROUTE } from '../../constants/routes';
import GenreDetail from '../../components/GenreDetail/GenreDetail';

function GenresPage() {
  const [songsData, setSongsData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(RECORDS_URL).then((response) => { setSongsData(response.data); });
  }, []);

  const iconClickHandler = () => {
    navigate(SONGS_ROUTE);
  };

  if (songsData !== []) {
    return (
      <div>
        <Header />
        <div className="genrespageMain">
          <div className="genrespageHeading">
            <CategoryTitle categoryText="genres" />
            <Icon icon="grid" onClick={iconClickHandler} />
          </div>
          <GenreDetail genre="bollywood" />
          <AllCards songsData={songsData.filter((eachSong) => eachSong.genre.name === 'Bollywood')} />
          <GenreDetail genre="country" />
          <AllCards songsData={songsData.filter((eachSong) => eachSong.genre.name === 'Country')} />
          <GenreDetail genre="pop" />
          <AllCards songsData={songsData.filter((eachSong) => eachSong.genre.name === 'Pop')} />
          <GenreDetail genre="rock" />
          <AllCards songsData={songsData.filter((eachSong) => eachSong.genre.name === 'Rock')} />
        </div>
      </div>
    );
  }
}

export default GenresPage;
