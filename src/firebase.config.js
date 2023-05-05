import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQGfiNr08MKg1B0VfMqPCnVVvrp7P6h1M",
  authDomain: "tesk-85d34.firebaseapp.com",
  projectId: "tesk-85d34",
  storageBucket: "tesk-85d34.appspot.com",
  messagingSenderId: "774715991176",
  appId: "1:774715991176:web:f5659820a20f9170392b3d"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();