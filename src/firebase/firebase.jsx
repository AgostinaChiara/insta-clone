import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAZrD6y23djfr1_D_c6AZNnBaBq2NDssw0",
  authDomain: "insta-clone-ceda9.firebaseapp.com",
  projectId: "insta-clone-ceda9",
  storageBucket: "insta-clone-ceda9.appspot.com",
  messagingSenderId: "999994579276",
  appId: "1:999994579276:web:f6d4b13c1dda0abee357e9",
  measurementId: "G-997BS2RKL1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage }