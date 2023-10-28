import React, { useEffect } from 'react';

import Header from '../common/Header/Header';
import ArtWorkCard from '../common/ArtWorkCard/ArtWorkCard';
import Loader from '../common/Loader/Loader';

import useGetListData from '../../hooks/useGetListData';
import { BASE_API_URL } from '../../utils/config';
import withContentWrapper from '../common/withContentWrapper/withContentWrapper';

interface ArtWorkData {
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

interface DashboardProps {
  // artworks: ArtWorkData[];
}

const Dashboard: React.FC<DashboardProps> = () => {
  const { data, loading, error } = useGetListData({ url: BASE_API_URL, queryParams: 'limit=10' });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const Content = () => {
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
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
