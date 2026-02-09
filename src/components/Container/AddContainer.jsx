import styles from "./AddContainer.module.css";
import DropDown from "./DropDown";
import InputField from "./InputField";
import IconButton from "../Buttons/IconButton";
import { FiCheckCircle, FiCornerUpLeft } from "react-icons/fi";
import { useContext } from "react";
import Context from "../App/Context";
function AddContainer() {
  const { set } = useContext(Context);
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.upperCont}>
          <InputField holder={"Enter a task..."} />
          <DropDown />
        </div>
        <div className={styles.lowerCont}>
          <div className={styles.Btn}>
            <IconButton icon={<FiCornerUpLeft />} set={set} />
          </div>
          <div className={styles.Btn}>
            <IconButton icon={<FiCheckCircle />} />
          </div>
        </div>
      </div>
    </>
  );
}
export default AddContainer;
