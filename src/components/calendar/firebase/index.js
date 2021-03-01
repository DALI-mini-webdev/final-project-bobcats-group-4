// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyCC2IoaaKSaqPT28zJmEDJFyOOyI7po8Mc",
    authDomain: "calendar-fb0f8.firebaseapp.com",
    projectId: "calendar-fb0f8",
    storageBucket: "calendar-fb0f8.appspot.com",
    messagingSenderId: "503880335460",
    appId: "1:503880335460:web:192a6e27445b12dc01df71",
    measurementId: "G-3Q4D43MDY9"
  });


  const db = firebase.firestore();

  export default {
    firebase, db
  }




