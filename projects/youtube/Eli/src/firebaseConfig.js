import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBo1GY3JmJhst8cJwHYIm28xj4ckX2Pnl4",
  authDomain: "recap-2b7e4.firebaseapp.com",
  databaseURL: "https://recap-2b7e4.firebaseio.com",
  projectId: "recap-2b7e4",
  storageBucket: "recap-2b7e4.appspot.com",
  messagingSenderId: "442250101685",
  appId: "1:442250101685:web:e70292e05d4aca656dcffc",
  measurementId: "G-VEC9H11VWD"
  };

  firebase.initializeApp(firebaseConfig);
  
  export const DB=firebase.firestore();