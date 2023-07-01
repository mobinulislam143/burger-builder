// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCZleR-n0gxYxsk1bScvG2ZqmBQSjGKDgQ",
  authDomain: "burger-builder-fea96.firebaseapp.com",
  databaseURL: "https://burger-builder-fea96-default-rtdb.firebaseio.com",
  projectId: "burger-builder-fea96",
  storageBucket: "burger-builder-fea96.appspot.com",
  messagingSenderId: "941107788905",
  appId: "1:941107788905:web:75b6a275945a0bf07536f8",
  measurementId: "G-XJQJ5211HK"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export default app
