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
  const { toggleAdding, togglePage } = useContext(Context);
  function toggle(i) {
    setSelected(i);
    togglePage(i);
  }
  return (
    <div className={styles.cont}>
      <IconButton
        icon={<FiList />}
        active={selected === 0}
        func={() => toggle(0)}
      />
      <IconButton
        icon={<FiCalendar />}
        active={selected === 1}
        func={() => toggle(1)}
      />

      <div className={styles.plusCont}>
        <IconButton
          icon={<FiPlusCircle size="45px" />}
          func={() => toggleAdding()}
        />
      </div>

      <IconButton
        icon={<FiPieChart />}
        active={selected === 2}
        func={() => toggle(2)}
      />
      <IconButton
        icon={<FiUser />}
        active={selected === 3}
        func={() => toggle(3)}
      />
    </div>
  );
}
export default Footer;
