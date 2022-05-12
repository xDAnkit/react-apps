import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { init } from "./connection/Firebase-singleton";
import "./index.css";
init();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
