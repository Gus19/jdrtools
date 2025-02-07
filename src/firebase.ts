// import { initializeApp } from 'firebase/app'
// import { getFirestore, collection } from 'firebase/firestore'
//
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_FIREBASE_APPID
// };
// export const firebaseApp = initializeApp(firebaseConfig);
//
// // used for the firestore refs
// const db = getFirestore(firebaseApp)
//
// // here we can export reusable database references
// export const todosRef = collection(db, 'todos')