import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDz1iLoK4EW-lPw9fpnnkhAA7ASIwpsjdg",
    authDomain: "sundar-s-plan.firebaseapp.com",
    databaseURL: "https://sundar-s-plan.firebaseio.com",
    projectId: "sundar-s-plan",
    storageBucket: "",
    messagingSenderId: "386145864272"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});
 
  export default firebase;