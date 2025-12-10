import React from 'react';
import Header from './Header';
import Footer from './Footer';

// El componente Layout recibe 'children', que es la página que contendrá (Home, Técnicos, etc.)
const Layout = ({ children }) => {
  return (
    <div style={styles.mainLayout}>
  
      <Header />
      
      {/* El contenido de la página. */}
      <main style={styles.content}>
        {children}
      </main>
      
    
      <Footer />
    </div>
  );
};

const styles = {
    mainLayout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
    },
    content: {
        flexGrow: 1, 
}


}

export default Layout;