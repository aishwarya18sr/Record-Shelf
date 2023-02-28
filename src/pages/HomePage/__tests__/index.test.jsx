import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import HomePage from '..';
import { SONGS_ROUTE } from '../../../constants/routes';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate
}));

describe('HomePage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should show the home page text and sync button when the home page is rendered', () => {
    render(<HomePage />);
    expect(screen.getByText(':((')).toBeTruthy();
    expect(screen.getByText('seems a bit empty in here..')).toBeTruthy();
    expect(screen.getByText('sync')).toBeTruthy();
  });
  it('should navigate to the songs page when the sync button is clicked', () => {
    render(<HomePage />);
    expect(mockedNavigate).toBeCalledTimes(0);
    fireEvent.click(screen.getByText('sync'));
    expect(mockedNavigate).toBeCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith(SONGS_ROUTE);
  });
});

