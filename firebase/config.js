import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TcV7lXY9fxpZqH2FxHqjbSyKviuLpAE",
  authDomain: "ecommerce-nextjs-04-2024.firebaseapp.com",
  projectId: "ecommerce-nextjs-04-2024",
  storageBucket: "ecommerce-nextjs-04-2024.appspot.com",
  messagingSenderId: "448877737965",
  appId: "1:448877737965:web:c1d5e1af704ad97a2459e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);