import { useEffect, useState } from "react";

// import MovieList from "./MovieList";
// import { ContextProvider } from "./context/Context";
import GoogleSignInV2 from "./GoogleSignInV2";
import { ProfileProvider } from "./context/ProfileContext";

import {
  getUserState,
  signOutGoogle,
  signInWithGoogle,
} from "./connection/Firebase-singleton";
export const lightTheme = {
  body: "#FFF",
  color: "#000",
  toggleBorder: "#FFF",
  backgroundColor: "#FFF",
};
export const darkTheme = {
  body: "#363537",
  color: "#FFF",
  toggleBorder: "#6B8096",
  backgroundColor: "#999",
};
function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(lightTheme);
  const [userDetail, setUserDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toggleTheme = () => {
    const theme1 = theme.backgroundColor !== "#999" ? darkTheme : lightTheme;
    setTheme(theme1);
  };

  useEffect(() => {
    const getUserData = async () => {
      const user = await getUserState();
      console.log("user38", user, user?.email);
      if (!user || !user?.email) {
        console.log("lne40  if condition");
        setIsLoading(false);
        return;
      }
      console.log("line42--", user);
      const { displayName, email, photoURL } = user;
      setUserDetail({ displayName, email, photoURL });
      setIsLoading(false);
    };
    getUserData();
  }, []);

  const googleSignOut = async () => {
    try {
      await signOutGoogle();

      setUserDetail({});
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  const googleLogin = async () => {
    const user = await signInWithGoogle();
    console.log("Line60", user);
    if (!user || !user?.user) {
      return alert("there is an issue while login");
    }
    const { displayName, email, photoURL } = user.user;
    console.log("user", { displayName, email, photoURL }, user);
    setUserDetail({ displayName, email, photoURL });
  };
  return (
    // <div style={theme}>
    //   <ContextProvider value={{ theme, setTheme }}>
    //     <button onClick={toggleTheme}>{theme.body}</button>
    //     <MovieList />
    //   </ContextProvider>
    // </div>
    <ProfileProvider value={{ userDetail, googleSignOut, googleLogin }}>
      {isLoading ? <h1>Loading</h1> : <GoogleSignInV2 />}
    </ProfileProvider>
  );
}

export default App;
