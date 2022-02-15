// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh1LkSzc0H1O3GVala0uLWBD-ue-Og-2Q",
  authDomain: "spotify-ea9fa.firebaseapp.com",
  projectId: "spotify-ea9fa",
  storageBucket: "spotify-ea9fa.appspot.com",
  messagingSenderId: "588091359741",
  appId: "1:588091359741:web:37700799388c1fbbb99994"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app 
