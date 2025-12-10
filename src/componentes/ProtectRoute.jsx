import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 

const ProtectRoute = () => {
    const { user } = useAuth(); 
    
    // Si el usuario está logueado, permite el acceso (<Outlet /> renderiza el componente hijo)
    // Si no está logueado, lo envía a la página de login
    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectRoute;