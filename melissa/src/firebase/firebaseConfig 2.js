import firebase from 'firebase';  
import 'firebase/firestore';
  
  var firebaseConfig = {
    apiKey: "AIzaSyCBohy6RgvHkIa4Y8OtPe1lfivtf8v-ANM",
    authDomain: "melissa-fb3.firebaseapp.com",
    databaseURL: "https://melissa-fb3.firebaseio.com",
    projectId: "melissa-fb3",
    storageBucket: "melissa-fb3.appspot.com",
    messagingSenderId: "557084276051",
    appId: "1:557084276051:web:a124f6b32130825061dda6",
    measurementId: "G-H16KMS209W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const DB = firebase.firestore()