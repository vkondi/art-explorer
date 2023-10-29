import React from 'react';

export interface ArtWorkCardProps {
  /**
   * Unique identification number for the artwork
   */
  id: number;
  thumbnail: {
    /**
     * Low-quality image placeholder for the artwork
     */
    lqip: string;
    /**
     * Alternate text description for the image
     */
    alt_text: string;
  };
  /**
   * Title of the artwork
   */
  title: string;
  /**
   * Title of the associated artist for the artwork
   */
  artist_title: string;
  /**
   * Description providing details about the artwork (optional)
   */
  description?: string;
  /**
   * Title of the artwork type
   */
  artwork_type_title: string;
  /**
   * Title of the department associated with the artwork
   */
  department_title: string;
}

export interface ErrorBoundaryProps {
  /**
   * Children components to be wrapped by the ErrorBoundary
   */
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  /**
   * Flag indicating whether an error has occurred
   */
  hasError: boolean;
}
