import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('displays the error message when an error is thrown', () => {
    const ErrorThrowingComponent = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByText('Something went wrong.');
    expect(errorMessage).toBeInTheDocument();
  });

  it('displays the child component when there is no error', () => {
    const DummyComponent = () => <div>Child Component</div>;

    render(
      <ErrorBoundary>
        <DummyComponent />
      </ErrorBoundary>
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });
});
