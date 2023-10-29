import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when no error is caught', () => {
    const { queryByText } = render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>
    );

    const testContent = queryByText('Test Content');
    expect(testContent).toBeInTheDocument();
  });

  it('displays fallback UI when error is caught', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Prevents error logging from appearing in the test output

    const ChildComponent = () => {
      throw new Error('Test Error');
    };

    const { queryByText } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    const fallbackText = queryByText('Something went wrong.');
    expect(fallbackText).toBeInTheDocument();
  });
});
