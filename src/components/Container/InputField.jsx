import styles from "./InputField.module.css";
import {} from "react";
import clsx from "clsx";

function InputField({ holder, setT, t, specificTime = null }) {
  const focusInput = (e) => {
    if (e) e.focus();
  };
  return (
    <input
      autoFocus
      ref={focusInput}
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
