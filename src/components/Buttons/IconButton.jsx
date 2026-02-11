import styles from "./Buttons.module.css";
import {} from "react";

function IconButton({ icon, set = null, func = null }) {
  function handle(e) {
    if (func != null) func(e);
    if (set) {
      set();
    }
  }
  return (
    <button className={styles.icon} onClick={(e) => handle(e)}>
      {icon}
    </button>
  );
}
export default IconButton;
