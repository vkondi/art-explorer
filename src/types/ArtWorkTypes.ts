export interface ArtWorkData {
  id: number;
  title: string;
  thumbnail: {
    lqip: string;
    alt_text: string;
  };
  main_reference_number: string;
  artist_display: string;
  description: string;
  dimensions: string;
  medium_display: string;
}

// Add other common types and interfaces here
