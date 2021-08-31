import React, { useState, useEffect, useContext } from 'react';
import { auth, storage } from '../firebase';

export const AuthContext = React.createContext()

export function useAuth() {
    useContext(AuthContext);
}
export function AuthProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [menu, setMenu] = useState("");
    const [menu2, setMenu2] = useState("");
    const [menu3, setMenu3] = useState("");
    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
    }
    const addUser = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password);   
    }
    const resetPassword = (email) => {
        auth.sendPasswordResetEmail(email)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        storage.ref('images/menu.jpeg').getDownloadURL().then(menu => {
            setMenu(menu)
        });
        storage.ref('images/menu2.jpeg').getDownloadURL().then(menu2 => {
            setMenu2(menu2)
        });
        storage.ref('images/menu3.jpeg').getDownloadURL().then(menu3 => {
            setMenu3(menu3)
        });
        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        loading
    }
    return (
        
        <AuthContext.Provider
            value={{ value, login, addUser, resetPassword, menu, setMenu, menu2, setMenu2, menu3, setMenu3 }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
