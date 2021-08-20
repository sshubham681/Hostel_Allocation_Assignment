import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtFUnflROk9nkvAory-IkEImGxgqv63YY",
  authDomain: "hostel-81fd7.firebaseapp.com",
  projectId: "hostel-81fd7",
  storageBucket: "hostel-81fd7.appspot.com",
  messagingSenderId: "411052873824",
  appId: "1:411052873824:web:c6930ce184eab4725f8b05",
  measurementId: "G-1T77RCRD06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase