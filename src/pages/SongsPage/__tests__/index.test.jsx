import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import SongsPage from '..';
import { mockSongsDataWithLikes } from '../../../mocks/songsData';
import * as commonUtils from '../../../utils/common';

jest.mock('../../../utils/makeRequest');

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate
}));

describe('SongsPage', () => {
  beforeEach(() => {
    jest.spyOn(commonUtils, 'getAllSongsData').mockResolvedValue(mockSongsDataWithLikes);
    jest.spyOn(commonUtils, 'updateAllSongsData').mockImplementation(jest.fn());
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should show loading text when the songs page is being rendered', async () => {
    render(<SongsPage />);
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeTruthy();
    });
  });
  it('should show the title, image and song cards when the songs page is rendered with data', async () => {
    render(<SongsPage />);
    await waitFor(() => {
      expect(screen.getByText('all songs')).toBeTruthy();
    });
    expect(screen.getByAltText('genre')).toBeTruthy();
    expect(screen.getAllByTestId('song-card')).toHaveLength(2);
  });
});

