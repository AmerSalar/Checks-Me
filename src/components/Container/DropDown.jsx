import IconButton from "../Buttons/IconButton";
import styles from "./DropDown.module.css";
import React, { _ } from "react";
import clsx from "clsx";
function DropDown(props) {
  function setValue(e) {
    props.setV(e.target.value);
  }
  return (
    <>
      <select
        className={clsx(
          styles.cont,
          !props.specificValue && styles.show,
          props.specificValue && styles.hide,
        )}
        value={props.specificValue || props.v}
        onChange={(e) => setValue(e)}
      >
        {props.options.map((e, i) => {
          return (
            <option value={e.toLowerCase()} key={i}>
              {e}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default DropDown;
