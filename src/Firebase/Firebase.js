// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ0twcqa5-alWdDDFdckGjLV3reA_X8G0",
  authDomain: "mania-course.firebaseapp.com",
  projectId: "mania-course",
  storageBucket: "mania-course.appspot.com",
  messagingSenderId: "15410048034",
  appId: "1:15410048034:web:d9b26465a320f5446dae7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;