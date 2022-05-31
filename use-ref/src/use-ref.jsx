import { useRef, useState } from "react";
const Counter = () => {
  const [name, setName] = useState("");
  const count = useRef(null);
  const onButtonClick = () => {
    console.log(count.current.value);
    count.current.focus();
  };
  console.log("re-render");
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input ref={count} />
      <button onClick={onButtonClick}>click</button>
    </>
  );
};
export default Counter;
