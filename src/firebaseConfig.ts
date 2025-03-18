import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6VaW0OPKLSyUEu0wKaHZLbjAQdvPbRxk",
  authDomain: "monportfolio-811e9.firebaseapp.com",
  projectId: "monportfolio-811e9",
  storageBucket: "monportfolio-811e9.firebasestorage.app",
  messagingSenderId: "1066138001793",
  appId: "1:1066138001793:web:3aa75b724c6c40f2944880",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
