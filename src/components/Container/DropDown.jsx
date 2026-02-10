import IconButton from "../Buttons/IconButton";
import styles from "./DropDown.module.css";
import React, { _ } from "react";
function DropDown({ t, setT }) {
  return (
    <>
      <select
        className={styles.cont}
        value={t}
        onChange={(e) => setT(e.target.value)}
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
