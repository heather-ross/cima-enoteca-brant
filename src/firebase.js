import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
// import 'firebase/firestore';

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
const storage = firebase.storage();
// export const db = firebase.firestore();
export const auth = firebase.auth();
export { storage, fire as default}