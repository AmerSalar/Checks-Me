import styles from "./Header.module.css";
import IconButton from "../Buttons/IconButton";
import { FiUser, FiBell, FiEdit } from "react-icons/fi";
import { useContext } from "react";
import Context from "../App/Context";
function Header() {
  const { toggleEdit } = useContext(Context);
  return (
    <div className={styles.cont}>
      <h1 className={styles.title}>Checks Me</h1>
      <div className={styles.rightCont}>
        <IconButton icon={<FiEdit />} set={toggleEdit} />
        <IconButton icon={<FiBell />} />
        <IconButton icon={<FiUser />} />
      </div>
    </div>
  );
}
export default Header;
