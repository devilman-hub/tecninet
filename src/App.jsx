import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout'; 
import Inicio from './paginas/Inicio';
import Tecnicos from './paginas/Tecnicos';
import Contactanos from './paginas/Contactanos';
import Nosotros from './paginas/Nosotros';
import Login from './paginas/Login';
import Registro from './paginas/Registro'
import Perfil from './paginas/Perfil'


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout><Inicio /></Layout>} /> 
        <Route path="/tecnicos" element={<Layout><Tecnicos /></Layout>} />
        <Route path="/contactanos" element={<Layout><Contactanos /></Layout>} />
        <Route path="/nosotros" element={<Layout><Nosotros /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} /> 
        <Route path="/register" element={<Layout><Registro /></Layout>} />

        <Route path="/profile" element={<Layout><Perfil/></Layout>} />
        
      </Routes>
    </Router>
  );
}

export default App;