import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 

const ProtectRoute = () => {
    const { user } = useAuth(); 
    
    // Si el usuario está logueado, permite el acceso.
    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectRoute;