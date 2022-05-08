import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";
import { ContextProvider } from "./context/Context";
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
  const toggleTheme = () => {
    const theme1 = theme.backgroundColor !== "#999" ? darkTheme : lightTheme;
    setTheme(theme1);
  };
  return (
    <div style={theme}>
      <ContextProvider value={{ theme, setTheme }}>
        <button onClick={toggleTheme}>{theme.body}</button>
        <MovieList />
      </ContextProvider>
    </div>
  );
}

export default App;
