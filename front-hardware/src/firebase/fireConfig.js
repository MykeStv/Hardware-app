// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrd4qpHVSGLEG-qhMmzL_jiiU0GFBfW-A",
  authDomain: "auth-donraul.firebaseapp.com",
  projectId: "auth-donraul",
  storageBucket: "auth-donraul.appspot.com",
  messagingSenderId: "441145444388",
  appId: "1:441145444388:web:c5076ceb51d4fa3c3570b1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = app.auth()
export default firebaseApp;