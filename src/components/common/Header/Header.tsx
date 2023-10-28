import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const onBrandClick = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <div className="left-container" onClick={onBrandClick}>
        <div className="logo">
          <img src={require('../../../assets/images/logo.png')} alt="Logo" />
        </div>
        <div className="app-name">ARTVERSE</div>
      </div>

      <div className="right-container">
        <div className="search-bar">
          <input type="text" placeholder="Search art..." />
        </div>
        <div className="profile-icon">
          <img src={require('../../../assets/images/avatar.png')} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
