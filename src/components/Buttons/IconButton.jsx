import styles from "./Buttons.module.css";
import { CiApple } from "react-icons/ci";
import {} from "react";

function IconButton({ icon, set = null, func = null }) {
  function handle() {
    if (func != null) func();
    if (set != null) {
      set((prev) => !prev);
    }
  }
  return (
    <button className={styles.icon} onClick={handle}>
      {icon}
    </button>
  );
}
export default IconButton;
