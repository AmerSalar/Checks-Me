import styles from "./Container.module.css";
import AddContainer from "./AddContainer";
import React, { useContext } from "react";
import Context from "../App/Context";
import clsx from "clsx";
function Container() {
  const { get } = useContext(Context);

  return (
    <div className={clsx(styles.cont, get && styles.show, !get && styles.hide)}>
      <AddContainer />
    </div>
  );
}
export default Container;
