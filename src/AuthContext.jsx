

import React, { createContext, useState, useContext } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // isLogged: booleano para saber si el usuario ha iniciado sesión.
    // user: objeto con la información del usuario.
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);

    // Función para simular el inicio de sesión
    const login = (userData) => {
        setIsLogged(true);
        setUser(userData);
        // Aquí se guardará un token en el almacenamiento local.
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

export const useAuth = () => {
    return useContext(AuthContext);
};