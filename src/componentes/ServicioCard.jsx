import React from 'react';
// Importaremos los estilos CSS específicos para esta tarjeta
import '../css/serviciocard.css'; 

// Este componente recibe dos propiedades (props): 'title' y 'imagePath'
const ServicioCard = ({ title, imagePath }) => {
  return (
    <div className="servicio-card">
      {/* La etiqueta <img> es la que muestra la imagen.
        Usaremos 'imagePath' para la fuente y 'title' como texto alternativo (alt).
      */}
      <img src={imagePath} alt={title} className="servicio-image" />
      
      {/* Título del servicio */}
      <h3 className="servicio-title">{title}</h3>
      
      {/* Podríamos añadir un botón de "Solicitar" aquí en el futuro */}
    </div>
  );
};

export default ServicioCard;