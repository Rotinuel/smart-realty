// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "palatial-dwellings.firebaseapp.com",
  projectId: "palatial-dwellings",
  storageBucket: "palatial-dwellings.appspot.com",
  messagingSenderId: "64202568617",
  appId: "1:64202568617:web:2b7af81df6fe439c25cab8",
  measurementId: "G-JN8TE5RHHH"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);