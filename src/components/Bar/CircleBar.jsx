import styles from "./CircleBar.module.css";
import clsx from "clsx";
import React, { useState, useContext } from "react";
import Context from "../App/Context";
function CircleBar({ checker }) {
  const { isEdit } = useContext(Context);
  const [active, setActive] = useState(null);
  function handleActive(e) {
    setActive(e.target.value);
    checker(true);
  }
  return (
    <div
      className={clsx(
        styles.cont,
        isEdit && styles.hide,
        !isEdit && styles.show,
      )}
    >
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
        onChange={(e) => handleActive(e)}
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
        onChange={(e) => handleActive(e)}
      />
      <input
        type="radio"
        name="barCapsule"
        value="op3"
        className={clsx(styles.capsule, active === "op3" && styles.green)}
        onChange={(e) => handleActive(e)}
      />
    </div>
  );
}
export default CircleBar;
