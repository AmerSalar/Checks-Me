import clsx from "clsx";
import Bar from "../Bar/CircleBar";
import EditBar from "../Bar/EditBar";
import styles from "./ListElement.module.css";
import React, { useState } from "react";

function ListElement(props) {
  const [singleEdit, setSingleEdit] = useState(false);
  const [check, setCheck] = useState(false);
  let text = props.text;
  if (check) text = <del>{props.text}</del>;
  function toggleEditable() {
    setSingleEdit(false);
  }
  return (
    <div
      className={clsx(styles.cont, check && styles.checked)}
      onClick={toggleEditable}
    >
      <h3>{text}</h3>
      <Bar checker={setCheck} isSingleEdit={singleEdit} />
      <EditBar
        eId={props.eId}
        eTime={props.eTime}
        eIndex={props.eIndex}
        isSingleEdit={singleEdit}
      />
    </div>
  );
}
export default ListElement;
