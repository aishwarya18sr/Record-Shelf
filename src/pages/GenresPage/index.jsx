import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryTitle from '../../components/CategoryTitle';
import GenreDetail from '../../components/GenreDetail';
import Icon from '../../components/Icon';
import AllCards from '../../components/SongCards';
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
        <div className="genresPageMain">
          <div className="genresPageHeading">
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
  return <p>Loading...</p>;
}

export default GenresPage;
