import React, { useState, useEffect, useContext } from 'react';
import { auth, storage } from '../firebase';
import firebase from 'firebase/app';

export const AuthContext = React.createContext()

export function useAuth() {
    useContext(AuthContext);
}
export function AuthProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [url, setURL] = useState("");
    const [url2, setURL2] = useState("");
 

    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
    }
    const addUser = (email, password, name) => {
        auth.createUserWithEmailAndPassword(email, password);
        addName(name)
    }
    const resetPassword = (email) => {
        auth.sendPasswordResetEmail(email)
    }
    const addName = (name) => {
        let user = firebase.auth().currentUser
        console.log(currentUser)
         user.updateProfile({
            displayName: name  
        }).then(()=> {
        }).catch((error) => {
            console.error(error)
        }
            
        )
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
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
    return (
        
        <AuthContext.Provider
            value={{ value, login, addUser, resetPassword, url, setURL, url2, setURL2 }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}