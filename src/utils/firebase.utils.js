import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithPopup, 
  signInWithRedirect, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc 
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCnRODj9Flv6K2zFtFHy36F148t8OcF4ok",
  authDomain: "react-crown-mart.firebaseapp.com",
  projectId: "react-crown-mart",
  storageBucket: "react-crown-mart.appspot.com",
  messagingSenderId: "407138047710",
  appId: "1:407138047710:web:d788387c0554323671144f"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt : 'select_account'
});


export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const createUserDocumentFromAuthUser = async (authUser) => {
  const userDocRef = doc(db, 'users', authUser.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const {displayName, email} = authUser;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user'+error.message)
    }
  }

  return userDocRef;
}