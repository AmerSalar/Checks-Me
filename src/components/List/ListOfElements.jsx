import styles from "./ListOfElements.module.css";
import ListElement from "./ListElement";
import IconButton from "../Buttons/IconButton";
import React, { useContext } from "react";
import Context from "../App/Context";
import clsx from "clsx";

function ListOfElements({ timezone, elements = [] }) {
  const { toggleAdding, setSpecific, isEdit = false } = useContext(Context);
  function handleAddingTask() {
    setSpecific(timezone.toLowerCase());
    toggleAdding();
  }
  return (
    <div className={clsx(styles.cont, elements[0] ? styles.show : styles.hide)}>
      <div className={styles.upperCont}>
        <h3 className={styles.time}>{timezone}</h3>
        <div
          className={clsx(
            isEdit && styles.btnCont,
            !isEdit && styles.btnContOff,
          )}
        >
          <IconButton icon={"+"} func={handleAddingTask} className={"addBtn"} />
        </div>
      </div>
      {elements.map((e, i) => {
        return (
          <ListElement
            key={e.id}
            text={e.text}
            eId={e.id}
            eTime={timezone.toLowerCase()}
            eIndex={i}
            eStatus={e.status}
            eCategory={e.category}
            eStreak={e.streak}
          />
        );
      })}
    </div>
  );
}
export default ListOfElements;
