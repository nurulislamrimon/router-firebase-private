// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsmDx38NuA7KTNsT6xcBd0dXOBMA0E7Y4",
    authDomain: "router-firebase-learning.firebaseapp.com",
    projectId: "router-firebase-learning",
    storageBucket: "router-firebase-learning.appspot.com",
    messagingSenderId: "854839735010",
    appId: "1:854839735010:web:5da18630b97954e35b24bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;