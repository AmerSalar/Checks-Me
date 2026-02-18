import styles from "./EditBar.module.css";
import IconButton from "../Buttons/IconButton";
import { FiTrash, FiArrowUp, FiArrowDown } from "react-icons/fi";
import clsx from "clsx";
import { useContext } from "react";
import Context from "../App/Context";
function EditBar({ eId, eTime, eIndex, isSingleEdit }) {
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
        (isEdit || isSingleEdit) && styles.show,
        !isEdit && !isSingleEdit && styles.hide,
      )}
    >
      <div className={styles.temporaryStyle}>
        <IconButton icon={<FiArrowDown />} func={moveDown} />
        <IconButton icon={<FiArrowUp />} func={moveUp} />
      </div>

      <IconButton
        icon={<FiTrash />}
        className={styles.trash}
        func={deleteTask}
      />
    </div>
  );
}
export default EditBar;
