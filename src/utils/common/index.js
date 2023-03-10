import { GET_LIKES_URL, RECORDS_URL } from '../../constants/apiEndpoints';
import makeRequest from '../makeRequest';

export const getSongIndexById = (
  allSongsData,
  selectedSongDataId
) => allSongsData.findIndex(
  (eachSongData) => eachSongData.id === selectedSongDataId
);

export const updateAllSongsData = (
  updatedSelectedSongId,
  updatedSelectedSongLikesDetails,
  allSongsData,
  setAllSongsData
) => {
  const songDataIndex = getSongIndexById(allSongsData, updatedSelectedSongId);
  const updatedSelectedSongData = {
    ...allSongsData[songDataIndex],
    likeDetails: updatedSelectedSongLikesDetails
  };
  setAllSongsData([
    ...allSongsData.slice(0, songDataIndex),
    updatedSelectedSongData,
    ...allSongsData.slice(songDataIndex + 1)
  ]);
};

export const getAllSongsData = async (navigate) => {
  const songsResponse = await makeRequest(RECORDS_URL, navigate);
  const songsDetails = songsResponse.data;
  return songsDetails?.map(async (eachSongDetails) => {
    const updatedSongDetails = { ...eachSongDetails };
    const likedResponse = await makeRequest(GET_LIKES_URL(eachSongDetails.id), navigate);
    updatedSongDetails.likeDetails = likedResponse.data;
    return updatedSongDetails;
  });
};

export const getAllSongGenreNames = (allSongsData) => [...new Set(
  allSongsData.map((eachSongData) => eachSongData.genre.name)
)];
