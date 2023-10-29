import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArtWorkCard from './ArtWorkCard';

const mockArtWorkCardProps = {
  id: 1,
  thumbnail: {
    lqip: 'test-lqip',
    alt_text: 'test-alt-text'
  },
  title: 'Test Artwork Title',
  artist_title: 'Test Artist',
  description: 'Test Description',
  artwork_type_title: 'Test Artwork Type',
  department_title: 'Test Department'
};

describe('ArtWorkCard', () => {
  it('renders the ArtWorkCard component correctly', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <ArtWorkCard {...mockArtWorkCardProps} />
      </Router>
    );

    expect(getByText(mockArtWorkCardProps.title)).toBeInTheDocument();
    expect(getByText(`by ${mockArtWorkCardProps.artist_title}`)).toBeInTheDocument();
    expect(getByText(mockArtWorkCardProps.artwork_type_title)).toBeInTheDocument();
    expect(getByText(mockArtWorkCardProps.department_title)).toBeInTheDocument();
    expect(getByAltText(mockArtWorkCardProps.thumbnail.alt_text)).toBeInTheDocument();
  });
});
