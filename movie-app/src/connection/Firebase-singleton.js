import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import config from "./config";

let app = null;
let auth = null;

const provider = new GoogleAuthProvider();

const init = () => {
  app = initializeApp(config);
  auth = getAuth(app);
};

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("line24", result);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const signOutGoogle = async () => {
  try {
    const user = await signOut(auth);

    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getUserState = async () => {
  return new Promise((resolve, reject) => {
    //upload the file, then call the callback with the location of the file
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        resolve(user);
        // ...
      } else {
        // User is signed out
        // ...
        resolve(null);
      }
    });
  });
};

export { init, app, auth, signInWithGoogle, signOutGoogle, getUserState };
