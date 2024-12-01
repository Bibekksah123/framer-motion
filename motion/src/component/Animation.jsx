import React from "react";
import { motion,useAnimationControls } from "framer-motion";
function Animation() {
  const controls = useAnimationControls();
  function handlebtn() {
    controls.start("flip");
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeContent: "center",
        gap: "0.8rem",
      }}
    >
      <button onClick={handlebtn} className="btn">
        Flipt It !
      </button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "306deg",
          },
        }}
        initial="initial"
        animate={controls}
        style={{ width: 150, height: 150, backgroundColor: "black" }}
      ></motion.div>
    </div>
  );
}

export default Animation;
