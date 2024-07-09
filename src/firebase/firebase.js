import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCJrF2ft0VaXhCG4jyPgkxBg6liNDbcB1I",
    authDomain: "get-me-therapy-bd49e.firebaseapp.com",
    projectId: "get-me-therapy-bd49e",
    storageBucket: "get-me-therapy-bd49e.appspot.com",
    messagingSenderId: "749935804061",
    appId: "1:749935804061:web:c2eea7fd76e2cf5c265e74", 
    measurementId: "G-VT804EMWPR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
