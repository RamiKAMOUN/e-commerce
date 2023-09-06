import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyAmBFY9wsdmEcyPlM8maKWNee23N76Whtk",
  authDomain: "react-reduxtoolkit-1e10e.firebaseapp.com",
  projectId: "react-reduxtoolkit-1e10e",
  storageBucket: "react-reduxtoolkit-1e10e.appspot.com",
  messagingSenderId: "298253417964",
  appId: "1:298253417964:web:291af45c399b6f73e614c9"

});
// Firebase storage reference
const storage = getStorage(app);
export default storage;