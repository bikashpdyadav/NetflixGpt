// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAssAeJ4811jojUMOBA3dGcJRFhlbaE5V8",
  authDomain: "netflix-gpt-project-d25b5.firebaseapp.com",
  projectId: "netflix-gpt-project-d25b5",
  storageBucket: "netflix-gpt-project-d25b5.appspot.com",
  messagingSenderId: "434269972292",
  appId: "1:434269972292:web:06c180ed3013c398241911",
  measurementId: "G-YF07WER9SP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
