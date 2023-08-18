// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4EaJT5r9YxGPalSODhpKEU4Xb6SF4ciM",
    authDomain: "next-auth-e9a6e.firebaseapp.com",
    projectId: "next-auth-e9a6e",
    storageBucket: "next-auth-e9a6e.appspot.com",
    messagingSenderId: "781319922212",
    appId: "1:781319922212:web:0f8b9b2d7cc6459619aeb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;