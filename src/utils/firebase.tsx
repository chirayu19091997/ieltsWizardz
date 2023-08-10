import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleSignIn = async () => {
  try {
    const user = await signInWithPopup(auth, provider);
    getAndRefreshToken();
    return user.user;
  } catch (err) {
    console.log(err);
    alert("Google Signup error");
    throw new Error();
  }
};

const passwordSignUp = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user.user;
  } catch (err) {
    alert("Signup error");
    throw new Error();
  }
};

const passwordLogin = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user;
  } catch (err: any) {
    alert(err.message.split(":")[1]);
    throw new Error(err.message.split(":"));
  }
};

export const getAndRefreshToken = async () => {
  try {
    const token = await auth?.currentUser?.getIdToken();
    sessionStorage.setItem("token", token || "");
    console.log(token);
    return token;
  } catch (err: any) {
    sessionStorage.clear();
    console.log(err);
    throw new Error(err);
  }
};

const firebaseLogout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    alert("Log out Error");
    throw new Error();
  }
};

const addData = async (table: string, payload: object) => {
  try {
    const docRef = doc(collection(db, table));
    setDoc(docRef, payload);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getData = async (table: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, table));
    const data = querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      return doc.data();
    });
    return data;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export {
  app,
  auth,
  googleSignIn,
  passwordLogin,
  passwordSignUp,
  firebaseLogout,
  addData,
  getData,
};
