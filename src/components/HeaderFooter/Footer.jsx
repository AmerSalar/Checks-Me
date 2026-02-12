import styles from "./Footer.module.css";
import IconButton from "../Buttons/IconButton";
import {
  FiList,
  FiUser,
  FiPlusCircle,
  FiCalendar,
  FiPieChart,
} from "react-icons/fi";
import React, { useContext } from "react";
import Context from "../App/Context";
function Footer() {
  const { set } = useContext(Context);
  return (
    <div className={styles.cont}>
      <IconButton icon={<FiList color="rgb(100, 175, 245)" />} />
      <IconButton icon={<FiCalendar />} />
      <div className={styles.plusCont}>
        <IconButton icon={<FiPlusCircle size="45px" />} set={set} />
      </div>
      <IconButton icon={<FiPieChart />} />
      <IconButton icon={<FiUser />} />
    </div>
  );
}
export default Footer;
