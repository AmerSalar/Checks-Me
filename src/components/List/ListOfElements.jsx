/* eslint-disable no-unused-vars */
import styles from "./ListOfElements.module.css";
import ListElement from "./ListElement";
import IconButton from "../Buttons/IconButton";
import React, { useEffect, useState } from "react";

function ListOfElements({ timezone, elements = [] }) {
  const [data, setData] = useState(elements);

  function handleAddingTask() {
    setData((d) => [...d, "New"]);
  }
  return (
    <div className={styles.cont}>
      <div className={styles.upperCont}>
        <h3 className={styles.time}>{timezone}</h3>
        <IconButton icon={"+"} func={handleAddingTask} />
      </div>
      {data.map((e, i) => {
        return <ListElement key={i} text={e} />;
      })}
    </div>
  );
}
export default ListOfElements;
