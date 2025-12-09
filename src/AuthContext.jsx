// src/AuthContext.jsx

import React, { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto
const AuthContext = createContext();

// 2. Crear el Proveedor (Provider) que envuelve la aplicación
export const AuthProvider = ({ children }) => {
    // isLogged: booleano para saber si el usuario ha iniciado sesión
    // user: objeto con la información del usuario (o null si no está logueado)
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);

    // Función para simular el inicio de sesión
    const login = (userData) => {
        setIsLogged(true);
        setUser(userData);
        // En una aplicación real, aquí guardarías un token en el almacenamiento local.
    };

    // Función para simular el cierre de sesión
    const logout = () => {
        setIsLogged(false);
        setUser(null);
        // Aquí se limpiaría el token del almacenamiento local.
    };

    // Objeto que contiene el estado y las funciones para compartir
    const contextValue = {
        isLogged,
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Crear un hook personalizado para usar el contexto fácilmente
export const useAuth = () => {
    return useContext(AuthContext);
};