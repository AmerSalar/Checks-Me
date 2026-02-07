import ListOfElements from "./ListOfElements";
import styles from "./ListOfLists.module.css";
function ListOfLists() {
  // const morning = [
  //   "Wake up on time - no snooze",
  //   "Pray Al-Fajr",
  //   "Eat clean Breakfast no fastfood",
  //   "No Phone for at least 1 hour",
  //   "Wake up on time - no snooze",
  //   "Pray Al-Fajr",
  //   "Eat clean Breakfast no fastfood",
  //   "No Phone for at least 2 hour",
  // ];
  const midday = [
    "Pray Ad-Dhuhr",
    "Eat clean lunch no junks allowed",
    "Focused study session for at least 30mins",
  ];
  return (
    <div className={styles.cont}>
      <ListOfElements timezone="Morning" elements={midday} />
      <ListOfElements timezone="Midday" />
      <ListOfElements timezone="Afternoon" />
      <ListOfElements timezone="Evening" />
      <ListOfElements timezone="Night" />
    </div>
  );
}

export default ListOfLists;
