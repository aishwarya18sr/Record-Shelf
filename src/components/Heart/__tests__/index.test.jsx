import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Heart from '..';

describe('Heart', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockOnClickHandler = jest.fn();
  const renderHeartComponent = (isLiked) => render(
    <Heart isLiked={isLiked} count={2} onClickHandler={mockOnClickHandler} />
  );
  it('should show the grey heart icon and heart count heart icon when the heart is rendered and not liked', () => {
    renderHeartComponent(false);
    expect(screen.getByTestId('gray-heart-image')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
  });
  it('should show the red heart icon and heart count heart icon when the heart is rendered and is liked', () => {
    renderHeartComponent(true);
    expect(screen.getByTestId('red-heart-image')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
  });
  it('should call the mockOnClickHandler when the heart is being clicked', () => {
    renderHeartComponent(false);
    fireEvent.click(screen.getByTestId('gray-heart-image'));
    expect(mockOnClickHandler).toHaveBeenCalledTimes(1);
  });
});

