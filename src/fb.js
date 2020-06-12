import firebase from "firebase/app";
import "firebase/firestore";

//Initialize Firestore
var firebaseConfig = {
  apiKey: "AIzaSyBOgXvGRr-uN14G7O9CSRz5t6ZNblg2g4U",
  authDomain: "veutify-tutorial-2e9a4.firebaseapp.com",
  databaseURL: "https://veutify-tutorial-2e9a4.firebaseio.com",
  projectId: "veutify-tutorial-2e9a4",
  storageBucket: "veutify-tutorial-2e9a4.appspot.com",
  messagingSenderId: "342512193915",
  appId: "1:342512193915:web:57757e03c46b9a4b922dde",
  measurementId: "G-D56H2R1QE4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
