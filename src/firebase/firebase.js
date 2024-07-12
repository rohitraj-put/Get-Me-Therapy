// Import required functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCJrF2ft0VaXhCG4jyPgkxBg6liNDbcB1I",
    authDomain: "get-me-therapy-bd49e.firebaseapp.com",
    projectId: "get-me-therapy-bd49e",
    storageBucket: "get-me-therapy-bd49e.appspot.com",
    messagingSenderId: "749935804061",
    appId: "1:749935804061:web:c2eea7fd76e2cf5c265e74",
    measurementId: "G-VT804EMWPR"
};
// Initialize Firebase with the configuration object
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export the auth and provider for use in your app
export { auth, provider };
