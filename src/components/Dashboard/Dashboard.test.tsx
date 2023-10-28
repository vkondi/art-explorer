import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('../../hooks/useGetListData', () => () => ({
  data: [
    {
      id: 1,
      title: 'Test Artwork',
      thumbnail: {
        lqip: 'test_lqip',
        alt_text: 'Test Alt Text'
      },
      main_reference_number: 'Test Reference Number',
      artist_display: 'Test Artist',
      description: 'Test Description',
      dimensions: 'Test Dimensions',
      medium_display: 'Test Medium',
      artist_title: 'Test Artist Title',
      artwork_type_title: 'Test Artwork Type',
      department_title: 'Test Department'
    }
  ],
  loading: false,
  error: null
}));

describe('Dashboard Component', () => {
  test('renders header', () => {
    render(<Dashboard />);
    const headerElement = screen.getByText(/Header/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders artwork card', () => {
    render(<Dashboard />);
    const artworkTitleElement = screen.getByLabelText(/Test Artwork/i);
    expect(artworkTitleElement).toBeInTheDocument();
  });

  test('renders loader when loading', () => {
    jest.mock('../../hooks/useGetListData', () => () => ({
      data: [],
      loading: true,
      error: null
    }));
    render(<Dashboard />);
    const loaderElement = screen.getByText(/loading/i);
    expect(loaderElement).toBeInTheDocument();
  });
});
