// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATEnqsdh-6P9H2EKlS_3Rg79CY2qIsJ5Q",
  authDomain: "codeacademia-90769.firebaseapp.com",
  projectId: "codeacademia-90769",
  storageBucket: "codeacademia-90769.firebasestorage.app",
  messagingSenderId: "540728676630",
  appId: "1:540728676630:web:8f2cbfa69cb5bef4d6c037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
