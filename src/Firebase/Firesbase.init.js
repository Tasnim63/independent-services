
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB7i5-ACYUojnSqnciKELrqLCQYylAozy0",
    authDomain: "independent-service-prov-60d93.firebaseapp.com",
    projectId: "independent-service-prov-60d93",
    storageBucket: "independent-service-prov-60d93.appspot.com",
    messagingSenderId: "909519148751",
    appId: "1:909519148751:web:ded700ed75f052daef09ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;