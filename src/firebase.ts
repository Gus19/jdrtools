import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: (import.meta.env.VITE_FIREBASE_APIKEY),
  authDomain: "jdrtools-d4524.firebaseapp.com",
  projectId: "jdrtools-d4524",
  storageBucket: "jdrtools-d4524.appspot.com",
  messagingSenderId: "560216665151",
  appId: "1:560216665151:web:978236ab15dc049cce5c8a"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')