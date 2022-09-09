import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAghzddZO3bFWZJYsJhj6gCtCDWFiDwdN8",
  authDomain: "frost-todo-a313e.firebaseapp.com",
  databaseURL: "https://frost-todo-a313e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "frost-todo-a313e",
  storageBucket: "frost-todo-a313e.appspot.com",
  messagingSenderId: "662119954914",
  appId: "1:662119954914:web:ed391d9d722f0a7e9561bb",
  measurementId: "G-949P6SEERV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);