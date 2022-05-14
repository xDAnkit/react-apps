import { useEffect, useState } from "react";
let isPressed = false;
const Mute = () => {
  const [isMuted, setIsMuted] = useState(true);

  //   const [isKeyPressed, setIsKeyPressed] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space" && isMuted && !isPressed) {
        setIsMuted(false);
        isPressed = true;

        // setIsKeyPressed(true);

        console.log("Space pressed"); //whatever you want to do when space is pressed
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space" && !isMuted && isPressed) {
        setIsMuted(true);
        isPressed = false;
        // setIsKeyPressed(false);
        console.log("space keyup remove"); //whatever you want to do when space is pressed
      }
    });
  }, [isMuted]);
  console.log("isMuted", isMuted);
  return (
    <>
      <h1>{isMuted ? "Muted" : "Unmute"}</h1>
      <button onClick={() => setIsMuted(!isMuted)}>
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </>
  );
};

export default Mute;
