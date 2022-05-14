import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Folder } from "./controllers/Folder";
import tree from "./data/folderData";
function App() {
  const [count, setCount] = useState(0);

  return <Folder tree={tree} />;
}

export default App;
