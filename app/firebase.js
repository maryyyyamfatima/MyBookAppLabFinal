// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ZjyW4xVlUvoUX9hPpxw5PPY6PozRWPU",
  authDomain: "bookapp-24792.firebaseapp.com",
  projectId: "bookapp-24792",
  storageBucket: "bookapp-24792.firebasestorage.app",
  messagingSenderId: "777952770757",
  appId: "1:777952770757:web:bb6474256c09c7246f0eac",
  measurementId: "G-N2V6KMSPRC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
