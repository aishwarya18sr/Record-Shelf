import { render, screen } from '@testing-library/react';
import React from 'react';
import GenreDetail from '..';

describe('GenreDetail', () => {
  it('should show the genre image and title when the component is rendered', () => {
    render(<GenreDetail genre="pop" />);
    expect(screen.getByTestId('pop-image')).toBeTruthy();
    expect(screen.getByText('pop')).toBeTruthy();
  });
});

