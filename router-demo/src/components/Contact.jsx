import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

export default function Contact() {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Header />
      <div>Contact</div>
    </>
  );
}
