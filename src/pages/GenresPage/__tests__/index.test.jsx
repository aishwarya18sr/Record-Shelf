import {
  fireEvent, render, screen, waitFor
} from '@testing-library/react';
import React from 'react';
import GenresPage from '..';
import { UPDATE_LIKES_URL } from '../../../constants/apiEndpoints';
import { SONGS_ROUTE } from '../../../constants/routes';
import { mockSongLikeResponse1, mockSongsDataWithLikes } from '../../../mocks/songsData';
import * as commonUtils from '../../../utils/common';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate
}));

describe('GenresPage', () => {
  beforeEach(() => {
    jest.spyOn(commonUtils, 'getAllSongsData').mockResolvedValue(mockSongsDataWithLikes);
    jest.spyOn(commonUtils, 'updateAllSongsData').mockImplementation(jest.fn());
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should show loading text when the genres page is being rendered', async () => {
    render(<GenresPage />);
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeTruthy();
    });
  });
  it('should show the title, image and song cards when the genres page is rendered with data', async () => {
    render(<GenresPage />);
    await waitFor(() => {
      expect(screen.getByText('genres')).toBeTruthy();
    });
    expect(screen.getByAltText('grid')).toBeTruthy();
    expect(screen.getAllByTestId('song-card')).toHaveLength(2);
  });
  it('should call the makeRequest function with appropriate parameters when the heart icon is clicked', async () => {
    const mockMakeRequest = makeRequest.mockResolvedValue(mockSongLikeResponse1);
    render(<GenresPage />);
    expect(mockMakeRequest).toHaveBeenCalledTimes(0);
    await waitFor(() => {
      expect(screen.getAllByTestId('red-heart-image')[0]).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId('red-heart-image'));
    expect(mockMakeRequest).toHaveBeenCalledTimes(1);
    expect(mockMakeRequest).toHaveBeenCalledWith(UPDATE_LIKES_URL('mock song id 1'), mockedNavigate, { data: { like: false } });
  });
  it('should navigate to songs page when the grid collapsed icon is clicked', async () => {
    render(<GenresPage />);
    await waitFor(() => {
      expect(screen.getByTestId('grid-image')).toBeTruthy();
    });
    expect(mockedNavigate).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByTestId('grid-image'));
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith(SONGS_ROUTE);
  });
});

