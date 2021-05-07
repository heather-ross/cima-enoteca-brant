import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import fire from '../firebase';

export const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
            } else {
            }
        setCurrentUser(user)
        setLoading(false)
    })
    return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        loading
    }

    const login = (e, email, password) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                if (user) {
                }
            }).catch((error) => {
                console.error(error);
            });
    }
    const addUser = (email, password) => {
        fire.auth().createUserWithEmailAndPassword(email, password)
    }

    const resetPassword = (email) => {
        fire.auth().sendPasswordResetEmail(email)
    }

    return (
        <AuthContext.Provider value={{value, login, addUser, resetPassword}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}