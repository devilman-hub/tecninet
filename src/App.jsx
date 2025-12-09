import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos el Layout que incluye Header y Footer
import Layout from './componentes/Layout'; 

// Importamos las páginas
import Inicio from './paginas/Inicio';
import Tecnicos from './paginas/Tecnicos';
import Contactanos from './paginas/Contactanos';
import Nosotros from './paginas/Nosotros';
import Login from './paginas/Login';


function App() {
  return (
    <Router>
      <Routes>
        {/* Todas las rutas ahora están envueltas en el componente Layout */}
        <Route path="/" element={<Layout><Inicio /></Layout>} /> 
        <Route path="/tecnicos" element={<Layout><Tecnicos /></Layout>} />
        <Route path="/contactanos" element={<Layout><Contactanos /></Layout>} />
        <Route path="/nosotros" element={<Layout><Nosotros /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} /> 
        {/* Esto asegura que el Header y Footer aparezcan en todas las páginas */}
      </Routes>
    </Router>
  );
}

export default App;