import ListOfElements from "./ListOfElements";
import styles from "./ListOfLists.module.css";
import clsx from "clsx";
import { useContext } from "react";
import Context from "../App/Context";
function ListOfLists() {
  const { get } = useContext(Context);
  const morning = [
    "Wake up on time - no snooze",
    "Pray Al-Fajr",
    "Eat clean Breakfast no fastfood",
    "No Phone for at least 1 hour",
  ];
  const midday = [
    "Pray Ad-Dhuhr",
    "Eat clean lunch no junks allowed",
    "Focused study session for at least 30mins",
  ];
  return (
    <div className={clsx(styles.cont, !get && styles.show, get && styles.hide)}>
      <ListOfElements timezone="Morning" elements={morning} />
      <ListOfElements timezone="Midday" elements={midday} />
      <ListOfElements timezone="Afternoon" />
      <ListOfElements timezone="Evening" />
      <ListOfElements timezone="Night" />
    </div>
  );
}

export default ListOfLists;
