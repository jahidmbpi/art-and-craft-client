// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpilyRbfk96U5hamlIbgYcRQwCP8X_Xss",
  authDomain: "crafted-roots.firebaseapp.com",
  projectId: "crafted-roots",
  storageBucket: "crafted-roots.firebasestorage.app",
  messagingSenderId: "622115606304",
  appId: "1:622115606304:web:b68925fdaf987280351145",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
