// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwE3dE0QMRaTBabf9GLcJGIC26n-ekIGA",
  authDomain: "genius-car-services-78503.firebaseapp.com",
  projectId: "genius-car-services-78503",
  storageBucket: "genius-car-services-78503.appspot.com",
  messagingSenderId: "459444771772",
  appId: "1:459444771772:web:4f92c87e446538c7b029b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
