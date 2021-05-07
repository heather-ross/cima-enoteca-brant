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
                console.log(user)
            } else {
                console.log("no one is signed in")
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
        console.log(password)
        console.log(email)
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                if (user) {
                    console.log('signed in!')
                }
            }).catch((error) => {
                console.error(error);
            });
    }
    const addUser = (email, password) => {
        fire.auth().createUserWithEmailAndPassword(email, password)
        console.log('user added!')
    }

    const resetPassword = (email) => {
        fire.auth().sendPasswordResetEmail(email)
        console.log('reset!')
    }

    return (
        <AuthContext.Provider value={{value, login, addUser, resetPassword}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}