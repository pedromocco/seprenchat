import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcR5BLqKtHUckr3_oKTqM6B97aN63fGco",
  authDomain: "react-chat-ba3d7.firebaseapp.com",
  projectId: "react-chat-ba3d7",
  storageBucket: "react-chat-ba3d7.firebasestorage.app",
  messagingSenderId: "773301866354",
  appId: "1:773301866354:web:dc80ee950bc7dcc40657eb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);