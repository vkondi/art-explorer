import React from 'react';
import './Dashboard.css';
import Header from '../common/Header/Header';
import ArtWorkCard from '../common/ArtWorkCard/ArtWorkCard';
import Loader from '../common/Loader/Loader';
import withContentWrapper from '../common/withContentWrapper/withContentWrapper';

import useGetListData from '../../hooks/useGetListData';
import { BASE_API_URL } from '../../utils/config';
import { ArtWorkData, DashboardProps } from '../../types/ComponentTypes';

const Dashboard: React.FC<DashboardProps> = () => {
  const { data, loading, error } = useGetListData({ url: BASE_API_URL, queryParams: 'limit=10' });

  const Content = () => {
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div className="details-container">
            {data.map((artwork: ArtWorkData, index: number) => (
              <ArtWorkCard
                id={artwork?.id}
                key={index}
                thumbnail={artwork?.thumbnail}
                title={artwork?.title}
                artist_title={artwork?.artist_title}
                description={artwork?.description}
                artwork_type_title={artwork?.artwork_type_title}
                department_title={artwork?.department_title}
              />
            ))}
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

export default Dashboard;
