// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBDrUdu69rCLAu2KUx2qEAjXik8Q0sCQw",
  authDomain: "fir-1-ouafi.firebaseapp.com",
  projectId: "fir-1-ouafi",
  storageBucket: "fir-1-ouafi.appspot.com",
  messagingSenderId: "914963581383",
  appId: "1:914963581383:web:88b01df1d1e8ec826bf1e2",
  measurementId: "G-NGCF86MRHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // établi la connexion avec la base de données
export default db ; 