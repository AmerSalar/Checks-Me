import styles from "./Footer.module.css";
import IconButton from "../Buttons/IconButton";
import { FiPlusCircle, FiCalendar, FiPieChart } from "react-icons/fi";
import React, { useContext } from "react";
import Context from "../App/Context";
function Footer() {
  const { set } = useContext(Context);
  const cal = <FiCalendar size="30px" />;
  const pie = <FiPieChart size="30px" />;
  const plus = <FiPlusCircle size="50px" />;
  return (
    <div className={styles.cont}>
      <IconButton icon={cal} />
      <div className={styles.plusCont}>
        <IconButton icon={plus} set={set} />
      </div>
      <IconButton icon={pie} />
    </div>
  );
}
export default Footer;
