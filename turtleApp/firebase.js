// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvArLkQH8DIlFeUk3vhVqcNhhye_i4B9I",
  authDomain: "turtleneck-app.firebaseapp.com",
  projectId: "turtleneck-app",
  storageBucket: "turtleneck-app.appspot.com",
  messagingSenderId: "75302395063",
  appId: "1:75302395063:web:544ff78cc271911df18132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };