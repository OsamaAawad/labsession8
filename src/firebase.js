import { initializeApp } from 'firebase/app'; 
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 
const firebaseConfig = {
    apiKey: "AIzaSyATUt5BszvCLnJLDc5sF5ZF_2f0mVJ9rSs",
    authDomain: "labsession8.firebaseapp.com",
    projectId: "labsession8",
    storageBucket: "labsession8.firebasestorage.app",
    messagingSenderId: "927916403166",
    appId: "1:927916403166:web:2b280451d304d776ad154f",
    measurementId: "G-W98WNW4BEW"
  };
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const db = getFirestore(app); 
export { auth, db }; 