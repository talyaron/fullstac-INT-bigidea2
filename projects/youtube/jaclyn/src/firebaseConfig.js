import firebase from 'firebase'; 
import 'firebase/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyAd0MGdVXKP1OBrqZgQ984od-XzSQXIXrI",
    authDomain: "jaclyn-fb1.firebaseapp.com",
    databaseURL: "https://jaclyn-fb1.firebaseio.com",
    projectId: "jaclyn-fb1",
    storageBucket: "jaclyn-fb1.appspot.com",
    messagingSenderId: "529201359753",
    appId: "1:529201359753:web:70b67a72365da687378f58"
  };

  firebase.initializeApp(firebaseConfig);
  export const DB = firebase.firestore()