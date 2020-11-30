import firebase from 'firebase'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9Rh9oPI05FMnF7-rUX9lkaOlT7sq5XVw",
    authDomain: "jacob-fb1.firebaseapp.com",
    databaseURL: "https://jacob-fb1.firebaseio.com",
    projectId: "jacob-fb1",
    storageBucket: "jacob-fb1.appspot.com",
    messagingSenderId: "332808747663",
    appId: "1:332808747663:web:d1edb19a10e4c0770d8efa",
    measurementId: "G-TG2SHQSXN7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore()