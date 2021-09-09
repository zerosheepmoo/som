// Firebase App (the core Firebase SDK) is always required and must be listed first
// @ts-ignore
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, Auth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";

// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_cPPZPZK4xbgGbn-2G1z9Nz6B1Cx9iTU",
  authDomain: "sosanggonginmoeem.firebaseapp.com",
  projectId: "sosanggonginmoeem",
  storageBucket: "sosanggonginmoeem.appspot.com",
  messagingSenderId: "535091541935",
  appId: "1:535091541935:web:20b7968be76d82e104a15a",
};

// app 초기화
const firebaseApp = initializeApp(firebaseConfig);

// 인증
const auth = getAuth();

auth.languageCode = "ko";

// 구글 인증 프로파이더
const provider = new GoogleAuthProvider();

export const SignInFunc = async (
  p: GoogleAuthProvider = provider,
  a: Auth = auth
) => {
  try {
    const res = await signInWithPopup(a, p);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential?.accessToken;
    const user = res.user;
    return { credential, token, user };
  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(
      `Error with code: ${errorCode}, with email: ${email}, with credential: ${credential}, and message: ${errorMessage}`
    );
  }
};

export const db = getFirestore(firebaseApp);

// const citiesRef = collection(db, "cities");

// await setDoc(doc(citiesRef, "BJ"), {
//   name: "Beijing",
//   state: null,
//   country: "China",
//   capital: true,
//   population: 21500000,
//   regions: ["jingjinji", "hebei"],
// });

export const getPosts = async () => {
  const res: any[] = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc: any) => {
    res.push({ id: doc.id, data: doc.data() });
  });
  return res;
};

export const addPost = async () => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {});

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// 디비는 파이어스토어에서

// 인증이랑 프로바이더 엑스포트
export { auth, provider };

export default db;
