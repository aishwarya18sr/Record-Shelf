import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Icon from '..';

describe('Icon', () => {
    afterEach(() => {
        jest.clearAllMocks();
      });
    const mockOnClickHandler = jest.fn();
    const renderIconComponent = () => render(
      <Icon icon="genre" onClickHandler={mockOnClickHandler} />
        );
    it('should show the icon image when the component is rendered', () => {
        renderIconComponent();
        expect(screen.getByTestId('genre-image')).toBeTruthy();
    });
    it('should call the mockOnClickHandler when the icons is being clicked', () => {
        renderIconComponent();
        fireEvent.click(screen.getByTestId('genre-image'));
        expect(mockOnClickHandler).toHaveBeenCalledTimes(1);
    });
});

