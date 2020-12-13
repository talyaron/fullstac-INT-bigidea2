import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCagAafUDnvM8NDuKM5oKEpVLk_hkO4FN4",
  authDomain: "emoshapp.firebaseapp.com",
  projectId: "emoshapp",
  storageBucket: "emoshapp.appspot.com",
  messagingSenderId: "864353409654",
  appId: "1:864353409654:web:7aad59d10332126cf5dd57"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore()