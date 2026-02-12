import styles from "./Footer.module.css";
import IconButton from "../Buttons/IconButton";
import {
  FiList,
  FiUser,
  FiPlusCircle,
  FiCalendar,
  FiPieChart,
} from "react-icons/fi";
import React, { useContext, useState } from "react";
import Context from "../App/Context";
function Footer() {
  const [selected, setSelected] = useState(0);
  const { set } = useContext(Context);
  function handleToggle(i) {
    setSelected(i);
  }
  return (
    <div className={styles.cont}>
      <div className={styles.sideCont}>
        <IconButton
          icon={<FiList />}
          i={0}
          active={selected === 0}
          toggle={handleToggle}
        />
        <IconButton
          icon={<FiCalendar />}
          i={1}
          active={selected === 1}
          toggle={handleToggle}
        />
      </div>
      <div className={styles.plusCont}>
        <IconButton icon={<FiPlusCircle size="45px" />} set={set} />
      </div>
      <div className={styles.sideCont}>
        <IconButton
          icon={<FiPieChart />}
          i={2}
          active={selected === 2}
          toggle={handleToggle}
        />
        <IconButton
          icon={<FiUser />}
          i={3}
          active={selected === 3}
          toggle={handleToggle}
        />
      </div>
    </div>
  );
}
export default Footer;
