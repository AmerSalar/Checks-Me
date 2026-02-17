import clsx from "clsx";
import Bar from "../Bar/CircleBar";
import EditBar from "../Bar/EditBar";
import styles from "./ListElement.module.css";
import React, { useCallback, useState } from "react";
import { FiCircle } from "react-icons/fi";

function ListElement(props) {
  const [active, setActive] = useState(props.eStatus);
  const [singleEdit, setSingleEdit] = useState(false);
  const [check, setCheck] = useState(false);
  const icon = {
    general: "⭕",
    religion: "🕌",
    physical: "💪",
    meal: "🍽️",
    routine: "📌",
    learning: "📚",
  };

  const checker = useCallback((val) => {
    setCheck(val);
  }, []);
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
      <div className={styles.leftCont}>
        {icon[props.eCategory]}
        <h3>{text}</h3>
      </div>

      <Bar
        checker={checker}
        isSingleEdit={singleEdit}
        active={active}
        setActive={setActive}
      />
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
