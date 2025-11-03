// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByorveSBxrAuhH6BhnL34PeLLCl8Kwb74",
  authDomain: "krushnam-21397.firebaseapp.com",
  projectId: "krushnam-21397",
  storageBucket: "krushnam-21397.firebasestorage.app",
  messagingSenderId: "206657477217",
  appId: "1:206657477217:web:b98b5a20bb6271ad95a820",
  measurementId: "G-YWW3DSK13H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
