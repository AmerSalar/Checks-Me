import styles from "./AddContainer.module.css";
import DropDown from "./DropDown";
import InputField from "./InputField";
import IconButton from "../Buttons/IconButton";
import { FiCheckCircle, FiX } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import Context from "../App/Context";
function AddContainer() {
  const times = ["Time", "Morning", "Midday", "Afternoon", "Evening", "Night"];
  const categories = [
    "Category",
    "General",
    "Meal",
    "Physical",
    "Religion",
    "Learning",
    "Routine",
    "Rest",
    "Chore",
    "Sport",
    "Rule",
    "Work",
  ];
  const { toggleAdding, add, specificTime, setSpecific, isAdding } =
    useContext(Context);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("morning");
  const [category, setCategory] = useState("general");

  function addTask() {
    if (task.trim() !== "") {
      if (specificTime) {
        add(specificTime, task, category);
      } else {
        add(time, task, category);
      }

      toggleAdding();
    }
  }

  useEffect(() => {
    function resetinputs() {
      setSpecific(null);
      setTask("");
      setTime("morning");
    }
    if (isAdding === false) resetinputs();
  }, [isAdding, setSpecific]);
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.cancel}>
          <IconButton icon={<FiX />} func={() => toggleAdding()} />
        </div>
        <div className={styles.upperCont}>
          <InputField
            holder={"Enter a task..."}
            setT={setTask}
            t={task}
            specificTime={specificTime}
          />
        </div>
        <div className={styles.middleCont}>
          <DropDown
            setV={setTime}
            v={time}
            specificValue={specificTime}
            options={times}
            defaultV={times[1].toLowerCase()}
          />
          <DropDown
            setV={setCategory}
            v={category}
            options={categories}
            defaultV={categories[1].toLowerCase()}
          />
        </div>
        <div className={styles.lowerCont}>
          <IconButton icon={<FiCheckCircle />} func={addTask} />
        </div>
      </div>
    </>
  );
}
export default AddContainer;
