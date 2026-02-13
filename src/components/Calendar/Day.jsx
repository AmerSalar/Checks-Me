import styles from "./Day.module.css";
function Day({ number = "", text = "" }) {
  return (
    <div className={styles.cont}>
      <h2>{number}</h2>
      <p>{text}</p>
    </div>
  );
}
export default Day;
