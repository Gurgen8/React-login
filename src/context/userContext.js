import React, { createContext, useState } from 'react';
export const AuthUserContext = createContext('');

export const UserContext = ({ children }) => {
    const [value, setValue] = useState('')
    const changeContext = (val) => {
        setValue(val)
    }
    const logOut = () => {
        window.localStorage.removeItem('user')
        setValue('')
    }

    return (
        <AuthUserContext.Provider value={{ User: value, changeContext, logOut }}>
            {children}
        </AuthUserContext.Provider>
    );
};