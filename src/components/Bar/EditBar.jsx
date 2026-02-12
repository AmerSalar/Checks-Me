import styles from "./EditBar.module.css";
import IconButton from "../Buttons/IconButton";
import { FiTrash, FiArrowUp, FiArrowDown } from "react-icons/fi";
import clsx from "clsx";
import { useContext } from "react";
import Context from "../App/Context";
function EditBar({ eId, eTime, eIndex }) {
  const { isEdit, del = null, up, down } = useContext(Context);

  function deleteTask() {
    if (del !== null) {
      del(eId, eTime);
    }
  }
  function moveUp() {
    up(eIndex, eTime);
  }
  function moveDown() {
    down(eIndex, eTime);
  }
  return (
    <div
      className={clsx(
        styles.cont,
        isEdit && styles.show,
        !isEdit && styles.hide,
      )}
    >
      <IconButton icon={<FiArrowDown />} func={moveDown} />
      <IconButton icon={<FiArrowUp />} func={moveUp} />
      <IconButton
        icon={<FiTrash />}
        className={styles.trash}
        func={deleteTask}
      />
    </div>
  );
}
export default EditBar;
