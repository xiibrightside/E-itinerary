import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNXvPdDrewQEkVQolPNOPnxFsmfFqguWE",
  authDomain: "e-itinerary.firebaseapp.com",
  projectId: "e-itinerary",
  storageBucket: "e-itinerary.appspot.com",
  messagingSenderId: "51071576159",
  appId: "1:51071576159:web:639626a690125fcfa653ea",
  measurementId: "G-2J19HNK99X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
