import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';

const  firebaseConfig = {
  apiKey: "AIzaSyBTpLBfYB-rFMcR-KKAPZ_xPmy-EJNfInQ",
  authDomain: "cima-admin.firebaseapp.com",
  projectId: "cima-admin",
  storageBucket: "cima-admin.appspot.com",
  messagingSenderId: "872843604414",
  appId: "1:872843604414:web:a0f946341784f7bf0249ef",
  measurementId: "G-C4T1FEFSQX"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default fire;