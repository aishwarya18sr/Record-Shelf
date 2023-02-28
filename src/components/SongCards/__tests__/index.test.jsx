import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SongCards from '..';
import { mockSongsDataWithLikes } from '../../../mocks/songsData';

describe('SongCards', () => {
  const mockOnHeartClickHandler = jest.fn();
  const renderSongCardsComponent = (mockData) => {
    render(
      <SongCards
        songsData={mockData}
        onHeartClickHandler={mockOnHeartClickHandler}
      />
    );
  };
  it('should show all the song cards when the component is rendered', () => {
    renderSongCardsComponent(mockSongsDataWithLikes);
    expect(screen.getAllByTestId('song-card')).toHaveLength(2);
  });
  it('should not show any cards when songs data array is empty', () => {
    renderSongCardsComponent([]);
    expect(screen.queryByTestId('song-card')).toBeFalsy();
  });
});

