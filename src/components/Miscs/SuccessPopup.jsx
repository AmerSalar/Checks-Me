import { useContext } from "react";
import styles from "./Popup.module.css";
import clsx from "clsx";
import Context from "../App/Context";
function SuccessPopup() {
  const { successMessage, setSuccessMessage } = useContext(Context);

  return (
    <div
      className={clsx(
        styles.success,
        styles.cont,
        successMessage !== null ? styles.show : styles.hide,
      )}
      onClick={() => setSuccessMessage(null)}
    >
      <p>{successMessage}</p>
    </div>
  );
}
export default SuccessPopup;
