import firebase from '../../../calihangman/src/functions/functions/node_modules/firebase';
import '../../../calihangman/src/functions/functions/node_modules/firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB5GKCs1yMzuxICTHXId5DptNZA1aGQHTY",
  authDomain: "tal-fb1.firebaseapp.com",
  databaseURL: "https://tal-fb1.firebaseio.com",
  projectId: "tal-fb1",
  storageBucket: "tal-fb1.appspot.com",
  messagingSenderId: "823131005125",
  appId: "1:823131005125:web:00b0c01f14f3922b3410ac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore()