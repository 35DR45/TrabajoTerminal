import React, { createContext, useState } from 'react';

// Crea el contexto
export const UserContext = createContext();

// Define el proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Guarda aquí el nombre de usuario o cualquier dato relevante

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
