import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import process from 'process';

const firebaseConfig = {
  apiKey: "AIzaSyCNR5asaNbATi7GWiOWHh4prCTeudS00JU",
  authDomain: "restaurant-finder-ae5df.firebaseapp.com",
  projectId: "restaurant-finder-ae5df",
  storageBucket: "restaurant-finder-ae5df.firebasestorage.app",
  messagingSenderId: "92945055317",
  appId: "1:92945055317:web:97c78d11b55c31ca6f9edc",
  measurementId: "G-0W5YK3GJ0W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//add