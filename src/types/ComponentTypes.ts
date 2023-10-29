export interface ArtWorkData {
  /**
   * Unique identification number for the artwork
   */
  id: number;
  /**
   * Title of the artwork
   */
  title: string;
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
   * Main reference number for the artwork
   */
  main_reference_number: string;
  /**
   * Display name of the artist associated with the artwork
   */
  artist_display: string;
  /**
   * Description providing details about the artwork
   */
  description: string;
  /**
   * Dimensions of the artwork
   */
  dimensions: string;
  /**
   * Medium used for creating the artwork
   */
  medium_display: string;
  /**
   * Title of the artist associated with the artwork
   */
  artist_title: string;
  /**
   * Title of the artwork type
   */
  artwork_type_title: string;
  /**
   * Title of the department associated with the artwork
   */
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
