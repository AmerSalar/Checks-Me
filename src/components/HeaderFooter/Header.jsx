import styles from "./Header.module.css";
import IconButton from "../Buttons/IconButton";
import { FiBell, FiEdit } from "react-icons/fi";
import { useContext, useState } from "react";
import Context from "../App/Context";
function Header() {
  const { toggleEdit } = useContext(Context);
  const [isActive, setIsActive] = useState(false);
  function handleToggle() {
    toggleEdit();
    setIsActive((prev) => !prev);
  }
  return (
    <div className={styles.cont}>
      <h1 className={styles.title}>Checks Me</h1>
      <div className={styles.rightCont}>
        <IconButton icon={<FiEdit />} func={handleToggle} active={isActive} />
        <IconButton icon={<FiBell />} />
      </div>
    </div>
  );
}
export default Header;
