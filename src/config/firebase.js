import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC02XKqODsY6NYMeTDyZXisWP4bS_Gml_I",
  authDomain: "flashcards-f23a5.firebaseapp.com",
  projectId: "flashcards-f23a5",
  storageBucket: "flashcards-f23a5.appspot.com",
  messagingSenderId: "203672116017",
  appId: "1:203672116017:web:51e64203c30a9ce6726e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;