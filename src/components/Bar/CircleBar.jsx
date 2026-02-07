import styles from "./CircleBar.module.css";
import clsx from "clsx";
import React, { useState } from "react";
function CircleBar({ checker }) {
  const [active, setActive] = useState(null);
  function handleActive(e) {
    setActive(e.target.value);
    checker(true);
  }
  return (
    <div className={styles.cont}>
      <p></p>
      <input
        type="radio"
        name="barCapsule"
        value="op1"
        className={clsx(
          styles.capsule,
          active === "op1" && styles.red,
          active === "op2" && styles.yellow,
          active === "op3" && styles.green,
        )}
        onClick={(e) => handleActive(e)}
      />
      <input
        type="radio"
        name="barCapsule"
        value="op2"
        className={clsx(
          styles.capsule,
          active === "op2" && styles.yellow,
          active === "op3" && styles.green,
        )}
        onClick={(e) => handleActive(e)}
      />
      <input
        type="radio"
        name="barCapsule"
        value="op3"
        className={clsx(styles.capsule, active === "op3" && styles.green)}
        onClick={(e) => handleActive(e)}
      />
    </div>
  );
}
export default CircleBar;
