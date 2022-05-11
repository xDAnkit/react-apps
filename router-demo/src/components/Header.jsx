import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/contact/12">Contact12</Link>
      <Link to="/contact/11">Contact11</Link>
      <Link to="/contact/1/abc">Contact1abc</Link>
    </>
  );
}
