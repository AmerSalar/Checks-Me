import styles from "./AddContainer.module.css";
import DropDown from "./DropDown";
import InputField from "./InputField";
import IconButton from "../Buttons/IconButton";
import { FiCheckCircle, FiCornerUpLeft } from "react-icons/fi";
import { useContext, useState } from "react";
import Context from "../App/Context";
function AddContainer() {
  const { set, add } = useContext(Context);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("morning");
  function addTask() {
    if (task.trim() !== "") {
      add(time, task);
      setTask("");
      setTime("morning");
    }
  }
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.upperCont}>
          <InputField holder={"Enter a task..."} setT={setTask} t={task} />
          <DropDown setT={setTime} t={time} />
        </div>
        <div className={styles.lowerCont}>
          <div className={styles.Btn}>
            <IconButton icon={<FiCornerUpLeft />} set={set} />
          </div>
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
