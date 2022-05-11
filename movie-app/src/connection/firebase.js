import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFnm7JmZQ0IgSm_hovkY35ub-WlhqN9IE",
  authDomain: "fir-crud-restapi-24646.firebaseapp.com",
  projectId: "fir-crud-restapi-24646",
  storageBucket: "fir-crud-restapi-24646.appspot.com",
  messagingSenderId: "8419354755",
  appId: "1:8419354755:web:b6a61e6b639ae9332013b6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
