import styles from "./Calendar.module.css";
import Day from "./Day";
import { useEffect, useState } from "react";
import IconButton from "../Buttons/IconButton";
import clsx from "clsx";

function Calendar({ year, month, active = true }) {
  const [days, setDays] = useState([]);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    // const thisYear = new Date().getFullYear();
    // const thisMonth = new Date().getMonth() + 1;
    // const today = new Date().getDate();
    function getDays(year, month) {
      const firstDay = new Date(year, month - 1, 1).getDay();
      const totalDays = new Date(year, month, 0).getDate();
      const array = [];
      for (let i = 0; i < firstDay; i++) {
        array.push(0);
      }
      for (let i = 1; i <= totalDays; i++) {
        array.push(i);
      }

      setDays(array);
    }

    getDays(year, month);
  }, [month, year]);
  return (
    <>
      <div
        className={clsx(
          styles.cont,
          active && styles.show,
          !active && styles.hide,
        )}
      >
        <div className={styles.weeksCont}>
          {weekdays.map((e, i) => (
            <h3 key={i}>{e}</h3>
          ))}
        </div>
        <div className={styles.daysCont}>
          {days.map((e, i) => {
            if (e === 0) return <div key={i}></div>;
            else
              return (
                <Day
                  number={e}
                  key={i}
                  text=""
                  today={
                    new Date().getFullYear() === year &&
                    new Date().getMonth() + 1 === month &&
                    new Date().getDate() === e
                  }
                />
              );
          })}
        </div>
      </div>
    </>
  );
}
export default Calendar;
