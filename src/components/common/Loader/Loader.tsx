import React from 'react';
import './Loader.css';

type LoadingProps = {
  text?: string;
};

const Loader: React.FC<LoadingProps> = ({ text = 'Loading...' }) => {
  return (
    <div className="loader-container">
      <div className="circle-container">
        <div className="outer-circle"></div>
        <div className="inner-circle"></div>
      </div>
      <div className="loading-text">{text}</div>
    </div>
  );
};

export default Loader;
