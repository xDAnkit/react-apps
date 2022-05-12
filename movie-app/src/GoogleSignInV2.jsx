import React, { useContext } from "react";
import { profileContext } from "./context/ProfileContext";

export default function GoogleSignInV2() {
  const { userDetail, googleSignOut, googleLogin } = useContext(profileContext);
  console.log("Line6", userDetail);
  return (
    <>
      {userDetail.email ? (
        <button onClick={googleSignOut}>Sign out</button>
      ) : (
        <button onClick={googleLogin}>Sign in with Google</button>
      )}
      <h1>{userDetail.displayName}</h1>
      <h1>{userDetail.email}</h1>
      <img src={userDetail.photoURL} />
    </>
  );
}
