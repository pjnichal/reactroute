import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNV4YWqlAXZRumErfVX03JEHmvXi2x9t8",
  authDomain: "fir-f2e24.firebaseapp.com",
  projectId: "fir-f2e24",
  storageBucket: "fir-f2e24.appspot.com",
  messagingSenderId: "498547553029",
  appId: "1:498547553029:web:cd10aa1e1ddc4b1bb63d6c",
};

export const fire = firebase.initializeApp(firebaseConfig);
export const db = fire.firestore();
