//@ts-check
import React, { useEffect, useState } from "react";

import {
  getUserState,
  signOutGoogle,
  signInWithGoogle,
} from "./connection/Firebase-singleton";

export default function GoogleSignIn() {
  const [userDetail, setUserDetail] = useState({});
  const [auth1, setAuth1] = useState({});
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function getUserData() {
      const user = await getUserState();

      console.log("Line16", user);
      if (user) {
        console.log("lin17", user);
        const { displayName, email, photoURL } = user;
        setUserDetail({ displayName, email, photoURL });
        setIsLoggedIn(true);
      }
    }
    getUserData();
  }, []);
  const signOut2 = async () => {
    try {
      await signOutGoogle();
      setIsLoggedIn(false);
      setUserDetail({});
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  const handleLogin = async () => {
    const user = await signInWithGoogle();
    console.log("line44", user);

    if (!user) {
      return alert("there is an issue while login");
    }
    const { displayName, email, photoURL } = user.user;
    console.log("user", { displayName, email, photoURL }, user);
    setUserDetail({ displayName, email, photoURL });
    setIsLoggedIn(true);
  };
  return (
    <>
      {loggedIn ? (
        <button onClick={signOut2}>Sign out</button>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
      <h1>{userDetail.displayName}</h1>
      <h1>{userDetail.email}</h1>
      <img src={userDetail.photoURL} />
    </>
  );
}
