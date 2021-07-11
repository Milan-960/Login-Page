import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDKtB_DfRN5Kbg3JLfbkH7N8skpzEFcRk4",
  authDomain: "login-page-a5996.firebaseapp.com",
  projectId: "login-page-a5996",
  storageBucket: "login-page-a5996.appspot.com",
  messagingSenderId: "803077713841",
  appId: "1:803077713841:web:1c2d4329e2fd28607a9790",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
