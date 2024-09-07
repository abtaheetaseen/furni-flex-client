// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWrPjX6rAYhQzl26xhVKMZQavcwdtdGf8",
  authDomain: "ibos-limited.firebaseapp.com",
  projectId: "ibos-limited",
  storageBucket: "ibos-limited.appspot.com",
  messagingSenderId: "688829935743",
  appId: "1:688829935743:web:1e258544bf06c57aeecf4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;