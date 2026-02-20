import styles from "./AddContainer.module.css";
import DropDown from "./DropDown";
import InputField from "./InputField";
import IconButton from "../Buttons/IconButton";
import { FiCheckCircle, FiX } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import Context from "../App/Context";
function AddContainer() {
  const times = ["Morning", "Midday", "Afternoon", "Evening", "Night"];
  const categories = [
    "Routine",
    "General",
    "Physical",
    "Religion",
    "Learning",
    "Meal",
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
      setCategory("routine");
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
            defaultV={"morning"}
          />
          <DropDown
            setV={setCategory}
            v={category}
            options={categories}
            defaultV={"general"}
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
