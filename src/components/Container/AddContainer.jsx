import styles from "./AddContainer.module.css";
import DropDown from "./DropDown";
import InputField from "./InputField";
import IconButton from "../Buttons/IconButton";
import { FiCheckCircle, FiX } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import Context from "../App/Context";
function AddContainer() {
  const { set, add, specificTime, setSpecific, get } = useContext(Context);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("morning");

  function addTask() {
    if (task.trim() !== "") {
      if (specificTime) {
        add(specificTime, task);
      } else {
        add(time, task);
      }
      // resetinputs();
    }
  }

  useEffect(() => {
    function resetinputs() {
      setSpecific(null);
      setTask("");
      setTime("morning");
    }
    if (get === false) resetinputs();
  }, [get, setSpecific]);
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.cancel}>
          <IconButton icon={<FiX />} set={set} />
        </div>
        <div className={styles.upperCont}>
          <InputField
            holder={"Enter a task..."}
            setT={setTask}
            t={task}
            specificTime={specificTime}
          />
          <DropDown setT={setTime} t={time} specificTime={specificTime} />
        </div>
        <div className={styles.lowerCont}>
          <div className={styles.Btn}>
            <IconButton
              icon={<FiCheckCircle />}
              func={addTask}
              set={task.trim() !== "" && set}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default AddContainer;
