// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB04D5dONg8l-wYZbybav63Q1V44WNQvtQ",
  authDomain: "house-marketplace-c5361.firebaseapp.com",
  projectId: "house-marketplace-c5361",
  storageBucket: "house-marketplace-c5361.appspot.com",
  messagingSenderId: "20726174764",
  appId: "1:20726174764:web:4a41567790448d9984ed89"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
export const app = initializeApp(firebaseConfig);