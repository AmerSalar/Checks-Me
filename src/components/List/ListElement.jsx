import clsx from "clsx";
import Bar from "../Bar/CircleBar";
import EditBar from "../Bar/EditBar";
import styles from "./ListElement.module.css";
import React, { useCallback, useState } from "react";
import {
  RiMoonFill,
  RiBowlFill,
  RiBrain2Fill,
  RiBook2Fill,
  RiHeartPulseFill,
  RiCircleFill,
  RiBriefcaseFill,
  RiBattery2ChargeFill,
  RiContractFill,
  RiFootballFill,
  RiPaintBrushFill,
} from "react-icons/ri";

function ListElement(props) {
  const [active, setActive] = useState(props.eStatus);
  const [singleEdit, setSingleEdit] = useState(false);
  const [check, setCheck] = useState(false);
  const icon = {
    general: <RiCircleFill />,
    religion: <RiMoonFill />,
    physical: <RiHeartPulseFill />,
    meal: <RiBowlFill />,
    routine: <RiBrain2Fill />,
    learning: <RiBook2Fill />,
    work: <RiBriefcaseFill />,
    rest: <RiBattery2ChargeFill />,
    rule: <RiContractFill />,
    sport: <RiFootballFill />,
    chore: <RiPaintBrushFill />,
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
      className={clsx(
        styles.cont,
        check && styles.checked,
        props.eStreak >= 7 && styles.contPremium,
      )}
      onClick={toggleEditable}
    >
      <div className={styles.leftCont}>
        <div>{icon[props.eCategory]}</div>
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
