import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBST-RY_R2Yb5Poiuo2MNmPiGZG6ITEfbg",
    authDomain: "jamiehowiezev.firebaseapp.com",
    projectId: "jamiehowiezev",
    storageBucket: "jamiehowiezev.appspot.com",
    messagingSenderId: "836713208302",
    appId: "1:836713208302:web:f296ce6449e57e752916ff",
    measurementId: "G-YRZQR64395"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore()