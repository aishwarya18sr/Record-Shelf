import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryTitle from '../../components/CategoryTitle';
import GenreDetail from '../../components/GenreDetail';
import Icon from '../../components/Icon';
import AllCards from '../../components/SongCards';
import { UPDATE_LIKES_URL } from '../../constants/apiEndpoints';
import { SONGS_ROUTE } from '../../constants/routes';
import { getAllSongGenreNames, getAllSongsData, updateAllSongsData } from '../../utils/common';
import makeRequest from '../../utils/makeRequest/makeRequest';
import './GenresPage.css';

function GenresPage() {
  const [allSongsData, setAllSongsData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllSongsData(setAllSongsData, navigate).then();
  }, []);

  const onHeartClickHandler = async (songId, songLike) => {
    const updatedLikedResponse = await makeRequest(UPDATE_LIKES_URL(songId), navigate, {
      data: { like: !songLike }
    });
    updateAllSongsData(songId, updatedLikedResponse.data, allSongsData, setAllSongsData);
  };

  const gridIconClickHandler = () => {
    navigate(SONGS_ROUTE);
  };

  if (allSongsData) {
    return (
      <div className="genresPageMain">
        <div className="genresPageHeading">
          <CategoryTitle categoryText="genres" />
          <Icon icon="grid" onClickHandler={gridIconClickHandler} />
        </div>
        {getAllSongGenreNames(allSongsData).map((eachGenreName) => (
          <div key={eachGenreName}>
            <GenreDetail genre={eachGenreName.toLowerCase()} />
            <AllCards
              songsData={allSongsData.filter(
                (eachSong) => eachSong.genre.name === eachGenreName
              )}
              onHeartClickHandler={onHeartClickHandler}
            />
          </div>
        ))}
      </div>
    );
  }
  return <p>Loading...</p>;
}

export default GenresPage;
