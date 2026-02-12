import styles from "./Buttons.module.css";
import {} from "react";
import clsx from "clsx";

function IconButton({
  icon,
  set = null,
  func = null,
  active = false,
  toggle,
  i = null,
}) {
  function handle(e) {
    if (toggle) toggle(i);

    if (func != null) func(e);

    if (set) {
      set();
    }
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
