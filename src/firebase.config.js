import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtD30gyX1dAm49jvydMGsW4r-BvmMpqQg",
  authDomain: "signature-react.firebaseapp.com",
  projectId: "signature-react",
  storageBucket: "signature-react.appspot.com",
  messagingSenderId: "30232178",
  appId: "1:30232178:web:a7335dace12a6b1feefceb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
