import styles from "./Footer.module.css";
import IconButton from "../Buttons/IconButton";
import { FiPlusCircle, FiCalendar, FiPieChart } from "react-icons/fi";
function Footer() {
  const cal = <FiCalendar size="30px" />;
  const pie = <FiPieChart size="30px" />;
  const plus = <FiPlusCircle size="50px" />;
  return (
    <footer className={styles.cont}>
      <IconButton icon={"="} />
      <IconButton icon={cal} />
      <div className={styles.plusCont}>
        <IconButton icon={plus} />
      </div>
      <IconButton icon={pie} />
      <IconButton icon={"="} />
    </footer>
  );
}
export default Footer;
