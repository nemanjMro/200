import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJHm12lYV9d46BODk_sbXafwykT3ibft4",
  authDomain: "starrating-fbeb0.firebaseapp.com",
  projectId: "starrating-fbeb0",
  storageBucket: "starrating-fbeb0.appspot.com",
  messagingSenderId: "46018127066",
  appId: "1:46018127066:web:859985dd85fbd0e1e9b1e3",
  measurementId: "G-PZ0BHQEW2T",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore();

export { db };
