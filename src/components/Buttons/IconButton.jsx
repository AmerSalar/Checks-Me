import styles from "./Buttons.module.css";
import {} from "react";
import clsx from "clsx";

function IconButton({ icon, func = null, active = false }) {
  function handle(e) {
    if (func !== null) func(e);
    console.log(new Date().getFullYear());
  }
  return (
    <button
      className={clsx(styles.icon, active && styles.on, !active && styles.off)}
      onClick={(e) => handle(e)}
    >
      {icon}
    </button>
  );
}
export default IconButton;
