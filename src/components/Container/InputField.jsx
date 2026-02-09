import styles from "./InputField.module.css";

function InputField({ holder }) {
  return <input type="text" className={styles.cont} placeholder={holder} />;
}

export default InputField;
