import styles from "./ListOfElements.module.css";
import ListElement from "./ListElement";
import IconButton from "../Buttons/IconButton";
import React, { useContext } from "react";
import Context from "../App/Context";

function ListOfElements({ timezone, elements = [] }) {
  const { set, setSpecific } = useContext(Context);
  function handleAddingTask() {
    setSpecific(timezone.toLowerCase());
  }
  return (
    <div className={styles.cont}>
      <div className={styles.upperCont}>
        <h3 className={styles.time}>{timezone}</h3>
        <IconButton
          icon={"+"}
          func={handleAddingTask}
          className={"addBtn"}
          set={set}
        />
      </div>
      {elements.map((e, i) => {
        return (
          <ListElement
            key={e.id}
            text={e.text}
            eId={e.id}
            eTime={timezone.toLowerCase()}
            eIndex={i}
          />
        );
      })}
    </div>
  );
}
export default ListOfElements;
