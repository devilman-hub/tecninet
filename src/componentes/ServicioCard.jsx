import React from 'react';

import '../css/serviciocard.css'; 


const ServicioCard = ({ title, imagePath }) => {
  return (
    <div className="servicio-card">
      
      <img src={imagePath} alt={title} className="servicio-image" />
      
      {/* Título del servicio */}
      <h3 className="servicio-title">{title}</h3>
      
      
    </div>
  );
};

export default ServicioCard;