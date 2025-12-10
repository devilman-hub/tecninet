import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';  
//Una librería de iconos de React.

import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p> &copy; Tecninet. Todos los derechos reservados.</p>

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


export default Footer;