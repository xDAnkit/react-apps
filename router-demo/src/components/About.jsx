import React, { useEffect } from "react";
import Header from "./Header";
import { useSearchParams } from "react-router-dom";
export default function About() {
  const [query] = useSearchParams();
  useEffect(() => {
    const searchParam = Object.fromEntries([...query]);
    console.log(searchParam);
  }, []);
  return (
    <>
      <Header />
      <div>About</div>
    </>
  );
}
