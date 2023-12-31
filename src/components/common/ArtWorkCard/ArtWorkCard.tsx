import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ArtWorkCard.css';
import { ArtWorkCardProps } from '../../../types/CommonTypes';

const ArtWorkCard: React.FC<ArtWorkCardProps> = ({
  id,
  thumbnail,
  title,
  artist_title = 'Unknown',
  description,
  artwork_type_title,
  department_title
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`details/${id}`);
  };

  return (
    <div className="artwork-card" onClick={onClick}>
      <img src={thumbnail?.lqip} alt={thumbnail?.alt_text} className="thumbnail" />
      <div className="artwork-details">
        <div className="title" title={title}>
          {title}
        </div>
        <div className="artist">{`by ${artist_title || 'Unknown'}`}</div>
        <div className="artwork-type">{artwork_type_title}</div>
        <div className="department">{department_title}</div>
      </div>
    </div>
  );
};

export default ArtWorkCard;
