import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB5-UQLVCbETTnnhI_zb-z8e7EsCwMHtys",
    authDomain: "chat-app-7bb11.firebaseapp.com",
    projectId: "chat-app-7bb11",
    storageBucket: "chat-app-7bb11.appspot.com",
    messagingSenderId: "513158755267",
    appId: "1:513158755267:web:bfd7f83c3a96679b680376",
    measurementId: "G-BQJBHP1084"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();

export { auth, db };