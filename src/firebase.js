import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPc0ZKBZzuVVmMvXvmXV4m5y9R6S_BbT8",
    authDomain: "facebook-clone-5cdc8.firebaseapp.com",
    projectId: "facebook-clone-5cdc8",
    storageBucket: "facebook-clone-5cdc8.appspot.com",
    messagingSenderId: "81806922648",
    appId: "1:81806922648:web:3975671e4328035d8111ed",
    measurementId: "G-L02FC4XPPM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
