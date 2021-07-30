import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4vspW9Qb-y_avHIhbna9cuo5fw7ctzYk",
    authDomain: "plugged-app-9dd7a.firebaseapp.com",
    projectId: "plugged-app-9dd7a",
    storageBucket: "plugged-app-9dd7a.appspot.com",
    messagingSenderId: "1090923228962",
    appId: "1:1090923228962:web:a00b64131e17ae53d33f7b",
    measurementId: "G-BZS5YPNCW4"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
