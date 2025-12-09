import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa'; // Iconos para contacto y ubicación
import '../css/tecnicocard.css';

// Este componente recibe la información completa de un técnico
const TecnicoCard = ({ name, specialty, description, contact, location, imagePath }) => {
  return (
    <div className="tecnico-card">
      
      {/* Sección de la Imagen y el Nombre */}
      <div className="tecnico-header">
        {/* Aquí la imagen del técnico */}
        <img src={imagePath} alt={`Foto de ${name}`} className="tecnico-image" />
        <h3 className="tecnico-name">{name}</h3>
        <p className="tecnico-specialty"><FaUserTie /> {specialty}</p>
      </div>

      {/* Sección de la Descripción y Detalles */}
      <div className="tecnico-details">
        <p className="tecnico-description">{description}</p>
        
        <div className="tecnico-info">
          <p className="info-item">
            <FaPhone size={14} className="info-icon" /> 
           <strong> Contacto: </strong> &nbsp; {contact}
          </p>
          <p className="info-item">
            <FaMapMarkerAlt size={14} className="info-icon" /> 
            <strong>Ubicación: </strong> &nbsp; {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TecnicoCard;