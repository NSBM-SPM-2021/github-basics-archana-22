import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOflOnr0248uS6YBJahX4lVpe8HwqJxUE",
    authDomain: "doctor-channeling-37e55.firebaseapp.com",
    projectId: "doctor-channeling-37e55",
    storageBucket: "doctor-channeling-37e55.appspot.com",
    messagingSenderId: "669401580036",
    appId: "1:669401580036:web:6247d8e30eb6629edcab51",
    measurementId: "G-H7EGJEJEHP"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;