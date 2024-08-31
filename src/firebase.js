import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAy0gmIGnqV0I-4uNpAHyvcsIq4Ct2OWTg",
  authDomain: "netflix-clone-b41e3.firebaseapp.com",
  projectId: "netflix-clone-b41e3",
  storageBucket: "netflix-clone-b41e3.appspot.com",
  messagingSenderId: "806610226988",
  appId: "1:806610226988:web:b91cac954ee6d218ee6689"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "users"), {  // changed "user" to "users"
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Error during sign up:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    
  } catch (error) {
    console.error("Error during login:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, signUp, login, logout };