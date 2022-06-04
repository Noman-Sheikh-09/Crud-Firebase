import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBRQxA3VvLgRQHiL97YafdcJTNV3jWzMzY",
    authDomain: "crud-demo-27081.firebaseapp.com",
    projectId: "crud-demo-27081",
    storageBucket: "crud-demo-27081.appspot.com",
    messagingSenderId: "313490711452",
    appId: "1:313490711452:web:6e6aafbb42816fa17f5e59"
  };
  

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
export const auth = firebase.auth();