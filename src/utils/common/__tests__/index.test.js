import {
  getAllSongGenreNames, getAllSongsData, getSongIndexById, updateAllSongsData
} from '..';
import { GET_LIKES_URL, RECORDS_URL } from '../../../constants/apiEndpoints';
import {
  mockSongLikeData1, mockSongLikeResponse1, mockSongLikeResponse2, mockSongsData,
  mockSongsDataWithLikes,
  mockSongsDataWithUpdatedLikes
} from '../../../mocks/songsData';
import makeRequest from '../../makeRequest';

jest.mock('../../../utils/makeRequest');

describe('getSongIndexById', () => {
  it('should return the corresponding index when the songs data and the correct id is given', () => {
    const selectedSongData = getSongIndexById(mockSongsDataWithLikes, 'mock song id 2');
    expect(selectedSongData).toBe(1);
  });
});

describe('updateAllSongsData', () => {
  it('should set the songs data with updated likes data when called with appropriate parameters', () => {
    const mockSetAllSongsData = jest.fn();
    expect(mockSetAllSongsData).toHaveBeenCalledTimes(0);
    updateAllSongsData('mock song id 2', mockSongLikeData1, mockSongsDataWithLikes, mockSetAllSongsData);
    expect(mockSetAllSongsData).toHaveBeenCalledTimes(1);
    expect(mockSetAllSongsData).toHaveBeenCalledWith(mockSongsDataWithUpdatedLikes);
  });
});

describe('getAllSongsData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call the make request function with appropriate parameters when the function is called', async () => {
    const mockMakeRequest = makeRequest.mockResolvedValueOnce(
      { data: mockSongsData }
    ).mockResolvedValue(mockSongLikeResponse1);
    const mockNavigate = jest.fn();
    expect(mockMakeRequest).toBeCalledTimes(0);
    await getAllSongsData(mockNavigate);
    expect(mockMakeRequest).toBeCalledTimes(3);
    expect(mockMakeRequest).toHaveBeenNthCalledWith(1, RECORDS_URL, mockNavigate);
    expect(mockMakeRequest).toHaveBeenNthCalledWith(2, GET_LIKES_URL(
      mockSongsData[0].id
    ), mockNavigate);
    expect(mockMakeRequest).toHaveBeenNthCalledWith(3, GET_LIKES_URL(
      mockSongsData[1].id
    ), mockNavigate);
  });
  it('should send the promises of all songs data when the function is called', async () => {
    makeRequest.mockResolvedValueOnce(
      { data: mockSongsData }
    ).mockResolvedValueOnce(mockSongLikeResponse1).mockResolvedValueOnce(mockSongLikeResponse2);
    const mockNavigate = jest.fn();
    getAllSongsData(mockNavigate).then((allSongDetailsResponse) => {
      Promise.all(allSongDetailsResponse).then((allSongDetails) => {
        expect(allSongDetails).toStrictEqual(mockSongsDataWithLikes);
      });
    });
  });
});

describe('getAllSongGenreNames', () => {
  it('should return the unique song genres when the songs data is given', () => {
    const songGenres = getAllSongGenreNames(mockSongsDataWithLikes);
    expect(songGenres).toStrictEqual(['mock genre name 1', 'mock genre name 2']);
  });
});
