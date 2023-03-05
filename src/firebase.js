import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC0nFd8U_ApxVpwOUECBT5tH1OzEmde-gk",
  authDomain: "react-authentication-6bc0b.firebaseapp.com",
  projectId: "react-authentication-6bc0b",
  storageBucket: "react-authentication-6bc0b.appspot.com",
  messagingSenderId: "154396184662",
  appId: "1:154396184662:web:e709bb7f30aba1b8a76bf7",
  measurementId: "G-61TREXTWQ9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;