import styles from "./Day.module.css";
import clsx from "clsx";
function Day({ number = "", text = "", today = false }) {
  return (
    <div className={clsx(styles.cont, today && styles.today)}>
      <h2>{number}</h2>
      <p>{text}</p>
    </div>
  );
}
export default Day;
