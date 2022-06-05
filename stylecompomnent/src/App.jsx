import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  const Title = styled.h1`
    front-size: 30px;
    text-align: center;
    color: palevioletred;
  `;
  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  return (
    <div className="App">
      <Title>Sanskrati</Title>
      <Button>button</Button>
    </div>
  );
}

export default App;
