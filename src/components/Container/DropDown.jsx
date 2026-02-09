import IconButton from "../Buttons/IconButton";
import styles from "./DropDown.module.css";
import React, { useState } from "react";
function DropDown() {
  const [choice, setChoice] = useState("morning");

  return (
    <>
      <select
        className={styles.cont}
        value={choice}
        onChange={(e) => setChoice(e.target.value)}
      >
        <option value="morning">Morning</option>
        <option value="midday">Midday</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
        <option value="night">Night</option>
      </select>
    </>
  );
}
export default DropDown;
