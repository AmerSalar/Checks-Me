import styles from "./Container.module.css";
import AddContainer from "./AddContainer";
import React, { useContext } from "react";
import Context from "../App/Context";
import clsx from "clsx";
function Container() {
  const { isAdding } = useContext(Context);

  return (
    <div
      className={clsx(
        styles.cont,
        isAdding && styles.show,
        !isAdding && styles.hide,
      )}
    >
      <AddContainer />
    </div>
  );
}
export default Container;
