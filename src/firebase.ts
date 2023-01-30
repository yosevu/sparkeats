import React, { useContext } from 'react';
// Firebase
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const {
  VITE_API_KEY: apiKey,
  VITE_AUTH_DOMAIN: authDomain,
  VITE_PROJECT_ID: projectId,
  VITE_STORAGE_BUCKET: storageBucket,
  VITE_MESSAGING_SENDER_ID: messagingSenderId,
  VITE_APP_ID: appId,
  VITE_MEASUREMENT_ID: measurementId,
} = import.meta.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const FirestoreContext = React.createContext(db);

export const FirestoreProvider = FirestoreContext.Provider;

export const useFirestore = () => useContext(FirestoreContext);

export default {
  setDoc: async (collection: string, id: string, payload: any) => {
    const db = useFirestore();
    await setDoc(doc(db, collection, id), payload);
  }
}
