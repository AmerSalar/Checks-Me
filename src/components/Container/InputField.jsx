import styles from "./InputField.module.css";
import { _ } from "react";

function InputField({ holder, setT, t }) {
  return (
    <input
      type="text"
      className={styles.cont}
      placeholder={holder}
      value={t}
      onChange={(e) => {
        setT(e.target.value);
      }}
    />
  );
}

export default InputField;
