import styles from "./Header.module.css";
import IconButton from "../Buttons/IconButton";
import { FiUser, FiBell } from "react-icons/fi";
function Header() {
  return (
    <div className={styles.cont}>
      <h1 className={styles.title}>Checks Me</h1>
      <div className={styles.rightCont}>
        <IconButton icon={<FiBell />} />
        <IconButton icon={<FiUser />} />
      </div>
    </div>
  );
}
export default Header;
