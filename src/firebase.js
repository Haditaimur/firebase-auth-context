// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlyxCkr83pKyQNbHUOnk6-9EHIUKmxwkM",
  authDomain: "checkin-system-7ea25.firebaseapp.com",
  projectId: "checkin-system-7ea25",
  storageBucket: "checkin-system-7ea25.appspot.com",
  messagingSenderId: "345419773601",
  appId: "1:345419773601:web:f179a4b9b41483d733e2e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
