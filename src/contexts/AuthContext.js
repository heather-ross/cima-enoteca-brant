import React, { useContext, useState, useEffect } from 'react';
import { auth, storage } from '../firebase';
import fire from '../firebase';

export const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [url, setURL] = useState("");
    const [url2, setURL2] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
            } else {
            }
            setCurrentUser(user)
            setLoading(false)
        })
        storage.ref('images/menu.jpeg').getDownloadURL().then(url => {
            setURL(url)
        });
        storage.ref('images/menu2.jpeg').getDownloadURL().then(url2 => {
            setURL2(url2)
        });
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
                // if (user) {
                // }
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
        <AuthContext.Provider value={{ value, login, addUser, resetPassword, url, setURL, url2, setURL2 }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}