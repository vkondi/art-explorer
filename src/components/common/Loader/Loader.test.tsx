import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loader';

test('renders loading component', () => {
  const { container } = render(<Loading text="Loading data..." />);
  expect(container.firstChild).toHaveClass('loader-container');
});
