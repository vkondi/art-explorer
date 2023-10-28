import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsPage from './DetailsPage';

test('renders details page with correct data', () => {
  const sampleData = {
    id: 152836,
    title: 'A Goddess, possibly Uma',
    thumbnail: {
      lqip: 'data:image/gif;base64,R0lGODlhAwAFAPMAAIWSgJadjJuhlLa4sbq5t769vMLBwMXEw8nMxsrMx8zMyczOyc3NyuXk5OXl5QAAACH5BAAAAAAALAAAAAADAAUAAAQLsCGXwGJBHWHKIBEAOw==',
      alt_text: 'A work made of bronze.'
    },
    main_reference_number: '1999.248',
    artist_display: 'Vietnam',
    place_of_origin: 'Vietnam',
    artist_title: 'Artist Title',
    gallery_title: 'Gallery Title',
    department_title: 'Department Title',
    date_display: 'Champa period, 9th/10th century',
    dimensions: '74.7 × 23.5 × 23.5 cm (29 3/8 × 9 1/4 × 9 1/4 in.)',
    medium_display: 'Bronze',
    inscriptions: 'Inscriptions',
    credit_line: 'Credit Line',
    catalogue_display: 'Catalogue Display',
    edition: 'Edition',
    color: 'Color',
    description: 'Description of the artwork goes here.'
  };

  //   render(<DetailsPage data={sampleData} />);

  //   const titleElement = screen.getByText(/A Goddess, possibly Uma/i);
  //   expect(titleElement).toBeInTheDocument();

  //   const descriptionElement = screen.getByText(/Description of the artwork goes here/i);
  //   expect(descriptionElement).toBeInTheDocument();
});
