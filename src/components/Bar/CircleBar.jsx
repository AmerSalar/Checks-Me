import styles from "./CircleBar.module.css";
import clsx from "clsx";
import React, { useContext, useEffect } from "react";
import Context from "../App/Context";
function CircleBar({ checker, isSingleEdit, active, setActive, update }) {
  const { isEdit } = useContext(Context);
  useEffect(() => {
    checker(active !== null);
  }, [active, checker]);
  function handleActive(value) {
    if (active === value) {
      setActive(null);
      update(null);
    } else {
      setActive(value);
      update(value);
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
      <button
        type="button"
        aria-label="check red"
        aria-pressed={active === "red"}
        value={"red"}
        onClick={() => handleActive("red")}
        className={clsx(
          styles.capsule,
          active === "red" && styles.red,
          active === "yellow" && styles.yellow,
          active === "green" && styles.green,
        )}
      />
      <button
        type="button"
        aria-label="check yellow"
        aria-pressed={active === "yellow"}
        value={"yellow"}
        onClick={() => handleActive("yellow")}
        className={clsx(
          styles.capsule,
          active === "yellow" && styles.yellow,
          active === "green" && styles.green,
        )}
      />
      <button
        type="button"
        aria-label="check green"
        aria-pressed={active === "green"}
        value={"green"}
        onClick={() => handleActive("green")}
        className={clsx(styles.capsule, active === "green" && styles.green)}
      />
    </div>
  );
}
export default CircleBar;
