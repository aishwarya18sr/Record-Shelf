import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
