   import firebase from 'firebase';
   import 'firebase/firestore';


   const firebaseConfig = {
    apiKey: "AIzaSyCTV1FMjg-X7xeqCSDwnhm2kSkOLGTvBbE",
    authDomain: "raz-fb1.firebaseapp.com",
    databaseURL: "https://raz-fb1.firebaseio.com",
    projectId: "raz-fb1",
    storageBucket: "raz-fb1.appspot.com",
    messagingSenderId: "870975017248",
    appId: "1:870975017248:web:cabb31e02f8c19d1890745",
    measurementId: "G-KF9D4DLN2L"
    
  
   };

   firebase.initializeApp(firebaseConfig)

  export const DB = firebase.firestore();