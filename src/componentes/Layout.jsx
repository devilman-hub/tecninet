import React from 'react';
import Header from './Header';
import Footer from './Footer';

// El componente Layout recibe 'children', que es la página que contendrá (Home, Técnicos, etc.)
const Layout = ({ children }) => {
  return (
    <div style={styles.mainLayout}>
      {/* El Header es Fijo */}
      <Header />
      
      {/* El contenido de la página */}
      <main style={styles.content}>
        {children}
      </main>
      
      {/* El Footer es Fijo */}
      <Footer />
    </div>
  );
};

const styles = {
    mainLayout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Asegura que ocupe al menos toda la altura de la vista
    },
    content: {
        flexGrow: 1, // Esto hace que el contenido ocupe el espacio restante, empujando al footer
    }
}

export default Layout;