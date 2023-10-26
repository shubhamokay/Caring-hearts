import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMpFX0fvacLKIWrQEsWflOk9fexTqezhU",
  authDomain: "caring-hearts-9e005.firebaseapp.com",
  projectId: "caring-hearts-9e005",
  storageBucket: "caring-hearts-9e005.appspot.com",
  messagingSenderId: "113965620156",
  appId: "1:113965620156:web:0f9c2d59627497b84fa9b9",
  measurementId: "G-ZJZ99N4TB7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;