import styles from "./InputField.module.css";
import { _ } from "react";
import clsx from "clsx";

function InputField({ holder, setT, t, specificTime = null }) {
  return (
    <input
      type="text"
      className={clsx(
        styles.cont,
        specificTime && styles.alone,
        !specificTime && styles.notAlone,
      )}
      placeholder={holder}
      value={t}
      onChange={(e) => {
        setT(e.target.value);
      }}
    />
  );
}

export default InputField;
