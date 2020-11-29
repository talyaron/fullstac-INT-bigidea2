import firebase from 'firebase';
import 'firebase/firestore';


  const firebaseConfig = {
    apiKey: "AIzaSyDey2wOGZ8Neyk1mP9BMJufB000t2k0I5c",
    authDomain: "cali-fb1.firebaseapp.com",
    databaseURL: "https://cali-fb1.firebaseio.com",
    projectId: "cali-fb1",
    storageBucket: "cali-fb1.appspot.com",
    messagingSenderId: "771786396223",
    appId: "1:771786396223:web:7fef1bad7d822ea3e39e8a"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore()