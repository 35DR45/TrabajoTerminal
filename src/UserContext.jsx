import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

// Define el proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return sessionStorage.getItem('user') || null;
    });

    useEffect(() => {
        if (user){
            sessionStorage.setItem('user', user);
        }else{
            sessionStorage.removeItem('user');
        }

    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
