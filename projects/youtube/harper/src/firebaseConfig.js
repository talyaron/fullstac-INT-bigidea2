import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDFFKVSC31CZyeKkOmqNP0uZiJ_XVo-d3o",
    authDomain: "harper-fb1.firebaseapp.com",
    databaseURL: "https://harper-fb1.firebaseio.com",
    projectId: "harper-fb1",
    storageBucket: "harper-fb1.appspot.com",
    messagingSenderId: "1054303864379",
    appId: "1:1054303864379:web:203b783fb5132b55a73e1e",
    measurementId: "G-H7NXGJP8GC"
  };

  firebase.initializeApp(firebaseConfig);
  
  export const DB=firebase.firestore();