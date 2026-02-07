import styles from "./Buttons.module.css";
import { CiApple } from "react-icons/ci";
function IconButton({ icon, func }) {
  return (
    <button className={styles.icon} onClick={func}>
      {icon}
    </button>
  );
}
export default IconButton;
