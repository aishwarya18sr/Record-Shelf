import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Image from '..';

describe('Image', () => {
  it('should show then actual image when the component is rendered with valid image path', () => {
    render(
      <Image
        imagePath="images/genre-pop"
        defaultImagePath="images/genre-default"
        imageExtension="png"
        altText="pop"
        className=""
      />
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', 'genre-pop.png');
  });
  it('should show then default image when the component is rendered with invalid image path', () => {
    render(
      <Image
        imagePath="images1/genre-pop"
        defaultImagePath="images/genre-default"
        imageExtension="png"
        altText="pop"
        className=""
      />
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', 'genre-default.png');
  });
});

