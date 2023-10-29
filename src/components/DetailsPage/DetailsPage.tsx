import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';

import Header from '../common/Header/Header';
import Loader from '../common/Loader/Loader';
import useGetDetailsData from '../../hooks/useGetDetailsData';
import withContentWrapper from '../common/withContentWrapper/withContentWrapper';

import { BASE_API_URL } from '../../utils/config';
import { DetailsPageProps } from '../../types/ComponentTypes';

const DetailsPage: React.FC<DetailsPageProps> = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetDetailsData({ url: BASE_API_URL, id: id as string });

  function removeHtmlTags(input: string): string {
    return input.replace(/<[^>]*>/g, '');
  }

  const Content = () => {
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div className="details-page-container">
            <div className="details-left-side">
              <div className="photo-frame">
                <img
                  className="photo"
                  src={data?.thumbnail?.lqip}
                  alt={data?.thumbnail?.alt_text}
                />
              </div>

              <h2>{data?.title}</h2>
              <p>
                <strong>Artist: </strong>
                {data?.artist_display}
              </p>
              <p>
                <strong>Place of Origin: </strong>
                {data?.place_of_origin}
              </p>
              <p>
                <strong>Artist Title: </strong>
                {data?.artist_title}
              </p>
              <p>
                <strong>Gallery Title: </strong>
                {data?.gallery_title}
              </p>
              <p>
                <strong>Department Title: </strong>
                {data?.department_title}
              </p>
              <p>
                <strong>Description: </strong>
                {removeHtmlTags(data?.description ?? '')}
              </p>
            </div>
            <div className="details-right-side">
              <p>
                <strong>Date: </strong>
                {data?.date_display}
              </p>
              <p>
                <strong>Dimensions: </strong>
                {data?.dimensions}
              </p>
              <p>
                <strong>Medium: </strong>
                {data?.medium_display}
              </p>
              <p>
                <strong>Inscriptions: </strong>
                {data?.inscriptions}
              </p>
              <p>
                <strong>Credit Line: </strong>
                {data?.credit_line}
              </p>
              <p>
                <strong>Catalogue Display: </strong>
                {data?.catalogue_display}
              </p>
              <p>
                <strong>Edition: </strong>
                {data?.edition}
              </p>
            </div>
          </div>
        )}
      </>
    );
  };

  const ContentComponent = withContentWrapper(Content);

  return (
    <>
      <Header />
      <ContentComponent />
    </>
  );
};

export default DetailsPage;
