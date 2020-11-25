import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBoYvkPf2q9lFddsgE3KLr3S5rvIPghdys",
    authDomain: "aryehfirebase1.firebaseapp.com",
    databaseURL: "https://aryehfirebase1.firebaseio.com",
    projectId: "aryehfirebase1",
    storageBucket: "aryehfirebase1.appspot.com",
    messagingSenderId: "1020894489421",
    appId: "1:1020894489421:web:82a6d7342a6189ee7fa504"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const DB= firebase.firestore()