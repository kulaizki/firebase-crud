import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAce5E1Li1Co50UILqUUMV0hiUNBizS8Vk",
  authDomain: "fir-crud-6577d.firebaseapp.com",
  projectId: "fir-crud-6577d",
  storageBucket: "fir-crud-6577d.appspot.com",
  messagingSenderId: "463669208821",
  appId: "1:463669208821:web:660c9ef2271efe52bcc7bc",
  measurementId: "G-S96SPRKF88"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // this populates db with the firestore info from app (connecting the database)