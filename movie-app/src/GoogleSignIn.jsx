import React, { useEffect, useState } from "react";
import { signInWithGoogle, auth } from "./connection/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function GoogleSignIn() {
  const [userDetail, setUserDetail] = useState({});
  const [auth1, setAuth1] = useState({});
  const [loggedIn, isLoggedIn] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("lin17", user);
        const { displayName, email, photoURL } = user;
        setUserDetail({ displayName, email, photoURL });
        isLoggedIn(true);

        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  const signOut1 = () => {
    signOut(auth)
      .then(function () {
        // Sign-out successful.
        isLoggedIn(false);
        setUserDetail({});
        console.log("Sign-out successful", isLoggedIn);
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <>
      {loggedIn ? (
        <button onClick={signOut1}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
      <h1>{userDetail.displayName}</h1>
      <h1>{userDetail.email}</h1>
      <img src={userDetail.imageURL} />
    </>
  );
}
