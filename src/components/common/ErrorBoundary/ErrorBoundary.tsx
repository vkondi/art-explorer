import React, { ErrorInfo } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from '../../../types/CommonTypes';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state to show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h3>Something went wrong.</h3>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
