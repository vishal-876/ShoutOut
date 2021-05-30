import firebase from 'firebase/app';
import "firebase/auth";

export const auth =firebase.initializeApp({
    apiKey: "AIzaSyB93EzojgDHfUTzTY2IgLKozxSwUqlx2kM",
    authDomain: "chatapp-6ce63.firebaseapp.com",
    projectId: "chatapp-6ce63",
    storageBucket: "chatapp-6ce63.appspot.com",
    messagingSenderId: "528605787066",
    appId: "1:528605787066:web:a636cba0a382171ff32383"
  }).auth();