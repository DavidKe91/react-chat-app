import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDZIrZkvRk1RcRkC2xhPp9gOrqGr3vuVbU",
    authDomain: "reactchat-28112.firebaseapp.com",
    projectId: "reactchat-28112",
    storageBucket: "reactchat-28112.appspot.com",
    messagingSenderId: "886281256593",
    appId: "1:886281256593:web:3ca4e41ef0ed0485020930"
}).auth();