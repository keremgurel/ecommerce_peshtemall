import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD20uKa_jLLnvd6hY2iROVQEIOjpI1q4Uk",
  authDomain: "ecommerce-site-a3cf6.firebaseapp.com",
  databaseURL: "https://ecommerce-site-a3cf6.firebaseio.com",
  projectId: "ecommerce-site-a3cf6",
  storageBucket: "ecommerce-site-a3cf6.appspot.com",
  messagingSenderId: "505766389159",
  appId: "1:505766389159:web:aa24e67a2460b7066ac282",
  measurementId: "G-TFHJQE29PD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

