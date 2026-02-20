import { useContext } from "react";
import styles from "./ErrorPopup.module.css";
import clsx from "clsx";
import Context from "../App/Context";
function ErrorPopup() {
  const { error, setError } = useContext(Context);

  return (
    <div
      className={clsx(styles.cont, error !== null ? styles.show : styles.hide)}
      onClick={() => setError(null)}
    >
      <p>{error}</p>
    </div>
  );
}
export default ErrorPopup;
