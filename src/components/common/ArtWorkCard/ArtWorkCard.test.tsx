import React from 'react';
import { render } from '@testing-library/react';
import ArtWorkCard from './ArtWorkCard';

const mockData = {
  id: 123,
  thumbnail: {
    lqip: 'test-thumbnail',
    alt_text: 'test-alt-text'
  },
  title: 'Test Title',
  artist_title: 'Test Artist Title',
  description: 'Test Description',
  artwork_type_title: 'Test Artwork Type Title',
  department_title: 'Test Department Title'
};

test('renders ArtWorkCard component with data', () => {
  const { getByText, getByAltText } = render(
    <ArtWorkCard
      id={mockData.id}
      thumbnail={mockData.thumbnail}
      title={mockData.title}
      artist_title={mockData.artist_title}
      description={mockData.description}
      artwork_type_title={mockData.artwork_type_title}
      department_title={mockData.department_title}
    />
  );

  expect(getByText(mockData.title)).toBeInTheDocument();
  expect(getByText(mockData.artist_title)).toBeInTheDocument();
  expect(getByText(mockData.description)).toBeInTheDocument();
  expect(getByText(mockData.artwork_type_title)).toBeInTheDocument();
  expect(getByText(mockData.department_title)).toBeInTheDocument();
  expect(getByAltText(mockData.thumbnail.alt_text)).toBeInTheDocument();
});
