import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAH92dsZvWCYNRl2vXG9-k6goNIOkz41rY",
    authDomain: "yummy-yummy-d4db9.firebaseapp.com",
    projectId: "yummy-yummy-d4db9",
    storageBucket: "yummy-yummy-d4db9.appspot.com",
    messagingSenderId: "635845600762",
    appId: "1:635845600762:web:5d8cb0ca9aaee72cfcb043",
    measurementId: "G-KMZTZDTFY8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const twitterProvider = new firebase.auth.TwitterAuthProvider();



  export  {db, auth, googleProvider, facebookProvider, twitterProvider};
