import ListOfElements from "./ListOfElements";
import styles from "./ListOfLists.module.css";
import clsx from "clsx";
import { useContext } from "react";
import Context from "../App/Context";
function ListOfLists() {
  const { get, data } = useContext(Context);
  return (
    <div className={clsx(styles.cont, !get && styles.show, get && styles.hide)}>
      <ListOfElements timezone="Morning" elements={data.morning} />
      <ListOfElements timezone="Midday" elements={data.midday} />
      <ListOfElements timezone="Afternoon" elements={data.afternoon} />
      <ListOfElements timezone="Evening" elements={data.evening} />
      <ListOfElements timezone="Night" elements={data.night} />
    </div>
  );
}

export default ListOfLists;
