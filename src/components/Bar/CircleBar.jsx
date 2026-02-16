import styles from "./CircleBar.module.css";
import clsx from "clsx";
import React, { useState, useContext } from "react";
import Context from "../App/Context";
function CircleBar({ checker, isSingleEdit }) {
  const { isEdit } = useContext(Context);
  const [active, setActive] = useState(null);
  function handleActive(e) {
    const value = e.target.value;
    if (active === value) {
      setActive(null);
      checker(false);
    } else {
      setActive(value);
      checker(true);
    }
  }
  return (
    <div
      className={clsx(
        styles.cont,
        (isEdit || isSingleEdit) && styles.hide,
        !isEdit && !isSingleEdit && styles.show,
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
