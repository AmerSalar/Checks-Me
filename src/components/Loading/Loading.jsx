import { FiLoader } from "react-icons/fi";
import styles from "./Loading.module.css";
import clsx from "clsx";
function Loading({ isActive }) {
  return (
    <div
      className={clsx(
        styles.loader,
        isActive && styles.on,
        !isActive && styles.off,
      )}
    >
      <FiLoader />
    </div>
  );
}
export default Loading;
