import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCuqXvrC20supCgCk2qdXMV5k0qwiNzCro",
    authDomain: "abbyfb1.firebaseapp.com",
    databaseURL: "https://abbyfb1.firebaseio.com",
    projectId: "abbyfb1",
    storageBucket: "abbyfb1.appspot.com",
    messagingSenderId: "868023743677",
    appId: "1:868023743677:web:cfb2d64ccb6ef557a133d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore()