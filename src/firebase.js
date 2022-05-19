import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOCtduTbsusLcKYNQgkC1nTRBCoyP1xVI",
  authDomain: "sembang-fb.firebaseapp.com",
  projectId: "sembang-fb",
  storageBucket: "sembang-fb.appspot.com",
  messagingSenderId: "902347371698",
  appId: "1:902347371698:web:8e84afdb4df16fc68905ab",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
