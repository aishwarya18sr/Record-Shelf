import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllCards from '../../components/AllCards/AllCards';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import GenreDetail from '../../components/GenreDetail/GenreDetail';
import Icon from '../../components/Icon/Icon';
import { changeLikesUrl } from '../../constants/apiEndpoints';
import { SONGS_ROUTE } from '../../constants/routes';
import { getAllSongGenreNames, getAllSongsData, updateAllSongsData } from '../../utils/common';
import makeRequest from '../../utils/makeRequest/makeRequest';
import './GenresPage.css';

function GenresPage() {
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
    navigate(SONGS_ROUTE);
  };

  if (allSongsData) {
    return (
      <div>
        <div className="genrespageMain">
          <div className="genrespageHeading">
            <CategoryTitle categoryText="genres" />
            <Icon icon="grid" onClick={iconClickHandler} />
          </div>
          {getAllSongGenreNames(allSongsData).map((eachGenreName) => (
            <div key={eachGenreName}>
              <GenreDetail genre={eachGenreName.toLowerCase()} />
              <AllCards
                songsData={allSongsData.filter(
                  (eachSong) => eachSong.genre.name === eachGenreName,
                )}
                onHeartClickHandler={onHeartClickHandler}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GenresPage;
