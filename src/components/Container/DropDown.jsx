import IconButton from "../Buttons/IconButton";
import styles from "./DropDown.module.css";
import React, { _ } from "react";
import clsx from "clsx";
function DropDown({ t, setT, specificTime = null }) {
  function setTime(e) {
    setT(e.target.value);
  }
  return (
    <>
      <select
        className={clsx(
          styles.cont,
          !specificTime && styles.show,
          specificTime && styles.hide,
        )}
        value={specificTime || t}
        onChange={(e) => setTime(e)}
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
