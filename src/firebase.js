// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC6vlDLDU3hBx1RwYo9npbRTqR-G9Gm7I",
  authDomain: "herhealthmatters-96055.firebaseapp.com",
  projectId: "herhealthmatters-96055",
  storageBucket: "herhealthmatters-96055.appspot.com",
  messagingSenderId: "884745997507",
  appId: "1:884745997507:web:bfe236236d1b3e95416676"
};


// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
