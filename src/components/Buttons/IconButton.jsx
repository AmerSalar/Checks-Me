import styles from "./Buttons.module.css";
import {} from "react";
import clsx from "clsx";

function IconButton({ icon, func = null, active = false, text = "" }) {
  function handle(e) {
    if (func !== null) func(e);
  }
  return (
    <button
      className={clsx(styles.icon, active && styles.on, !active && styles.off)}
      onClick={(e) => handle(e)}
    >
      {icon} <p>{text}</p>
    </button>
  );
}
export default IconButton;
