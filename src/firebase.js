import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAOKaNmIeryL3pu6RDbdAf-ja0OuL9UAqk",
  authDomain: "fb-clone-c0828.firebaseapp.com",
  databaseURL: "https://fb-clone-c0828.firebaseio.com",
  projectId: "fb-clone-c0828",
  storageBucket: "fb-clone-c0828.appspot.com",
  messagingSenderId: "1090745849353",
  appId: "1:1090745849353:web:06d6d207c2b4f47001cad8",
  measurementId: "G-P180QPP7VT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db;