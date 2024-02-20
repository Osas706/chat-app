import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDzM1-Tgaw2Dn5s8jIFpGuzJ7JVtz12OpA",
    authDomain: "chat-b108e.firebaseapp.com",
    projectId: "chat-b108e",
    storageBucket: "chat-b108e.appspot.com",
    messagingSenderId: "875742598015",
    appId: "1:875742598015:web:b4b5c9bae829afe44fc04a"
}).auth();