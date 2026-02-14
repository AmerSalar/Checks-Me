import IconButton from "../Buttons/IconButton";
import styles from "./MonthChanger.module.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useContext } from "react";
import Context from "../App/Context";

function MonthChanger({ year = null, month = null }) {
  const { setYear, setMonth } = useContext(Context);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function nextMonth() {
    if (month === 12) {
      setMonth(1);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  }
  function prevMonth() {
    if (month === 1) {
      setMonth(12);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  }
  return (
    <div className={styles.cont}>
      <IconButton icon={<FiArrowLeft />} func={prevMonth} />
      <h1>
        {year} - {months[month - 1]}
      </h1>
      <IconButton icon={<FiArrowRight />} func={nextMonth} />
    </div>
  );
}
export default MonthChanger;
