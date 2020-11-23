import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBEumZUTCL3Jc9pt7_CjiSVTxmz9aMqSvo",
    authDomain: "synthesistalyaron.firebaseapp.com",
    databaseURL: "https://synthesistalyaron.firebaseio.com",
    projectId: "synthesistalyaron",
    storageBucket: "synthesistalyaron.appspot.com",
    messagingSenderId: "799655218679",
    appId: "1:799655218679:web:d0118a27fd956d12"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const DB = firebase.firestore()