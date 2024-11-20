import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

// Define el proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return sessionStorage.getItem('user') || null;
    });

    const [iduser, setidUser] = useState(() => {
        return sessionStorage.getItem('iduser') || null;
    });


    useEffect(() => {
        if (user) {
            sessionStorage.setItem('user', user);
        } else {
            sessionStorage.removeItem('user');
        }
    }, [user]);

    // Sincroniza `theme` con `sessionStorage`
    useEffect(() => {
        sessionStorage.setItem('iduser', iduser);
    }, [iduser]);

    return (
        <UserContext.Provider value={{ user, setUser ,iduser,setidUser}}>
            {children}
        </UserContext.Provider>
    );
};