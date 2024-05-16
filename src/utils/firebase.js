// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGkcOee9NrC-FI_BMHd88XiuW2h2CmTUk",
  authDomain: "netflixgpt-d9c8e.firebaseapp.com",
  projectId: "netflixgpt-d9c8e",
  storageBucket: "netflixgpt-d9c8e.appspot.com",
  messagingSenderId: "4854368703",
  appId: "1:4854368703:web:e2588edc03aeb77025390a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();