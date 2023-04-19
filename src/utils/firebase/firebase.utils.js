import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    // signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBiwbVSGQGpuMf8Kf1HEWXDqctTWVdHvvU",
    authDomain: "crown-db-e2110.firebaseapp.com",
    projectId: "crown-db-e2110",
    storageBucket: "crown-db-e2110.appspot.com",
    messagingSenderId: "922710217597",
    appId: "1:922710217597:web:7fa1b7e4c4c3c9ef457214",
    measurementId: "G-TG9KZFR1WW"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => 
    signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => 
    signInWithGoogleRedirect(auth, googleProvider);
  export const db = getFirestore();

  export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return console.log('No User!');
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);
    
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
            console.log(`User Exists: ${userSnapShot.exists()}. Creating User...`);
        } catch (error) {
            console.log(`Error Creating User: ${error.message}`)
        }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailandPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }
