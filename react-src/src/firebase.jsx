import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBOCwTICKjXgeEDgbx6elouOWn0kT1oUw",
  authDomain: "lemniscate-30462.firebaseapp.com",
  projectId: "lemniscate-30462",
  storageBucket: "lemniscate-30462.appspot.com",
  messagingSenderId: "647003641601",
  appId: "1:647003641601:web:1049d1a17f02619d676d00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;