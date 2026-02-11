import styles from "./EditBar.module.css";
import IconButton from "../Buttons/IconButton";
import { FiTrash, FiArrowUp, FiArrowDown } from "react-icons/fi";
import clsx from "clsx";
import { useContext } from "react";
import Context from "../App/Context";
function EditBar() {
  const { isEdit } = useContext(Context);
  return (
    <div
      className={clsx(
        styles.cont,
        isEdit && styles.show,
        !isEdit && styles.hide,
      )}
    >
      <IconButton icon={<FiArrowDown />} />
      <IconButton icon={<FiArrowUp />} />
      <IconButton icon={<FiTrash />} className={styles.trash} />
    </div>
  );
}
export default EditBar;
