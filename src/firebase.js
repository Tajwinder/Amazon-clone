import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB81J0dmWvNf_GAOYJeBC2L_QKLKpY7e38",
    authDomain: "clone-4562d.firebaseapp.com",
    databaseURL: "https://clone-4562d.firebaseio.com",
    projectId: "clone-4562d",
    storageBucket: "clone-4562d.appspot.com",
    messagingSenderId: "856355216248",
    appId: "1:856355216248:web:158936242cda1064e4068d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };