import React from 'react';

export interface ArtWorkCardProps {
  id: number;
  thumbnail: {
    lqip: string;
    alt_text: string;
  };
  title: string;
  artist_title: string;
  description?: string;
  artwork_type_title: string;
  department_title: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
