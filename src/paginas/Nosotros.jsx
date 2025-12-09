import React from 'react';
import '../css/nosotros.css';

// Importamos las imágenes (debes tenerlas en la carpeta src/images)
import Equipo from '../img/equipo.jpg';
import Us from '../img/us.jpg';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      
      {/* Sección 1: Introducción y Descripción de Tecninet */}
      <section className="nosotros-section">
        <div className="text-content">
          <h1 className="nosotros-title">Bienvenido a Tecninet</h1>
          <p className="description-text">
           <strong> Tecninet </strong> nace con la misión de conectar rápidamente a los hogares y negocios con profesionales de servicios a domicilio <strong>confiables y certificados. </strong> Entendemos lo frustrante que puede ser encontrar un plomero o electricista en una emergencia, por eso creamos una plataforma simple, segura y eficiente para satisfacer tus necesidades, desde <strong> fontanería </strong> y <strong> electricidad </strong> hasta <strong> jardinería </strong> y <strong> limpieza. </strong>
          </p>
        </div>
        <img src={Equipo} alt="Misión de Tecninet, Servicios a Domicilio" className="section-image first-image" />
      </section>

      {/* Una línea separadora para claridad visual */}
      <hr className="separator" />

      {/* Sección 2: Nuestros Valores y Compromiso (con imagen en orden diferente) */}
      <section className="nosotros-section reverse-layout">
        <img src={Us} alt="Compromiso y Valores de Tecninet" className="section-image" />
        <div className="text-content">
          <h2 className="subtitle">Compromiso y Transparencia</h2>
          <p className="description-text">
            Nuestro compromiso es simple: <strong> calidad, rapidez y honestidad. </strong>  Cada técnico en Tecninet pasa por un riguroso proceso de verificación. Te ofrecemos tarifas claras y la tranquilidad de saber que estás contratando a los mejores profesionales de tu zona. Creemos en la transparencia total en cada servicio.
          </p>
          <ul className="values-list">
            <li>✅ <strong> Seguridad: </strong> &nbsp; Técnicos verificados.</li>
            <li>🚀 <strong> Rapidez: </strong> &nbsp; Servicio en minutos.</li>
            <li>💰 <strong> Precio Justo: </strong> &nbsp; Sin costos ocultos.</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;