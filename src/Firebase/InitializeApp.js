import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config";

const InitializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default InitializeFirebase;
