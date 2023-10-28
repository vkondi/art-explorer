import React from 'react';
import './PageNotFound.css';

import Header from '../common/Header/Header';
import withContentWrapper from '../common/withContentWrapper/withContentWrapper';

const PageNotFound = () => {
  const Content = () => {
    return (
      <div className="container">
        <h2>
          Oops! Looks like the masterpiece you were seeking is still a work in progress.
          <p>Our artists are on the case, preparing a grand unveiling soon!</p>
        </h2>
      </div>
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

export default PageNotFound;
