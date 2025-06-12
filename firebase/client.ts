// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYPWbajjLqaJHVwQ9fONO7SesHBg5KyvM",
  authDomain: "kaiwa-806c2.firebaseapp.com",
  projectId: "kaiwa-806c2",
  storageBucket: "kaiwa-806c2.firebasestorage.app",
  messagingSenderId: "682033532891",
  appId: "1:682033532891:web:fb06195228e19ee2d421fe",
  measurementId: "G-JZTD49ZW22"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp() ;
// const analytics = getAnalytics(app);

export const auth= getAuth(app);
export const db= getFirestore(app); 