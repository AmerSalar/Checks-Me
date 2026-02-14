import styles from "./Header.module.css";
import IconButton from "../Buttons/IconButton";
import { FiBell, FiEdit } from "react-icons/fi";
import { useContext, useState } from "react";
import Context from "../App/Context";
import clsx from "clsx";
function Header() {
  const { toggleEdit, isMainPage } = useContext(Context);
  const [isActive, setIsActive] = useState(false);
  function handleToggle() {
    toggleEdit();
    setIsActive((prev) => !prev);
  }
  return (
    <div className={styles.cont}>
      <h1 className={styles.title}>Checks Me</h1>
      <div className={styles.rightCont}>
        <div
          className={clsx(
            styles.editBtn,
            isMainPage && styles.showEdit,
            !isMainPage && styles.hideEdit,
          )}
        >
          <IconButton
            icon={<FiEdit />}
            func={handleToggle}
            active={isActive}
            text="Edit"
          />
        </div>

        <IconButton icon={<FiBell />} />
      </div>
    </div>
  );
}
export default Header;
