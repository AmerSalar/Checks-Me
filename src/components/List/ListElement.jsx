import Bar from "../Bar/CircleBar";
import styles from "./ListElement.module.css";
import React, { useState } from "react";

function ListElement(props) {
  const [check, setCheck] = useState(false);
  let text = props.text;
  if (check) text = <del>{props.text}</del>;
  return (
    <div className={styles.cont}>
      <h3>{text}</h3>
      <Bar checker={setCheck} />
    </div>
  );
}
export default ListElement;
