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
  artist_title: string;
  artwork_type_title: string;
  department_title: string;
}

export interface DashboardProps {
  // artworks: ArtWorkData[];
}

export interface DetailsPageProps {
  //   data: {
  //     id: number;
  //     title: string;
  //     thumbnail: {
  //       lqip: string;
  //       alt_text: string;
  //     };
  //     main_reference_number: string;
  //     artist_display: string;
  //     place_of_origin: string;
  //     artist_title: string;
  //     gallery_title: string;
  //     department_title: string;
  //     date_display: string;
  //     dimensions: string;
  //     medium_display: string;
  //     inscriptions: string;
  //     credit_line: string;
  //     catalogue_display: string;
  //     edition: string;
  //     color: string;
  //     description: string;
  //   };
}
