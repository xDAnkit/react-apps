import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Product from "./Product";
import Parent from "./components/Parent";
import Mute from "./components/MuteUnmute/Mute";
import ClassComp from "./ClassComp";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <Product />
  // <ClassComp/>
  // <Parent/>
  <Mute />
);
