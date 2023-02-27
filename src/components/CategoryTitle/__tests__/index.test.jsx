import { render, screen } from '@testing-library/react';
import React from 'react';
import CategoryTitle from '..';

describe('CategoryTitle', () => {
    it('should show the category title when the component is rendered', () => {
        render(<CategoryTitle categoryText="all songs" />);
        expect(screen.getByText('all songs')).toBeTruthy();
    });
});
