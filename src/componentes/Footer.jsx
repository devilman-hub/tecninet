import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 

// 1. Importamos el archivo de estilos CSS
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tecninet. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaFacebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

// Eliminamos el objeto 'styles'
export default Footer;