import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SongCard from '..';
import { mockSongsDataWithLikes } from '../../../mocks/songsData';

describe('SongCard', () => {
  const mockOnHeartClickHandler = jest.fn();
  const renderSongCardComponent = () => {
    render(
      <SongCard
        songData={mockSongsDataWithLikes[0]}
        onHeartClickHandler={mockOnHeartClickHandler}
      />
    );
  };
  it('should show the song name, image, artist name and heart count when the component is rendered', () => {
    renderSongCardComponent();
    expect(screen.getByText('mock title 1')).toBeTruthy();
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'mock image url 1');
    expect(screen.getByText('mock artist name 1')).toBeTruthy();
    expect(screen.getByText('1')).toBeTruthy();
  });
  it('should call the mockOnHeartClickHandler when the heart is clicked', () => {
    renderSongCardComponent();
    expect(mockOnHeartClickHandler).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByTestId('heart-button'));
    expect(mockOnHeartClickHandler).toHaveBeenCalledTimes(1);
  });
});

