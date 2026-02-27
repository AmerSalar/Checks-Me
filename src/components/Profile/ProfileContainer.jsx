import IconButton from "../Buttons/IconButton";
import { RiDoorFill, RiDeleteBin2Fill } from "react-icons/ri";
import styles from "./ProfileContainer.module.css";
import clsx from "clsx";
import { useContext } from "react";
import Context from "../App/Context";
function ProfileContainer({ active }) {
  const { logout, reset } = useContext(Context);
  return (
    <div className={clsx(active ? styles.cont : styles.hide)}>
      <IconButton icon={<RiDoorFill />} text="Log-out" func={logout} />
      <IconButton icon={<RiDeleteBin2Fill />} text="Reset" func={reset} />
    </div>
  );
}
export default ProfileContainer;
