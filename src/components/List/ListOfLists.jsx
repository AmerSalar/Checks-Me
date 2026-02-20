import ListOfElements from "./ListOfElements";
import styles from "./ListOfLists.module.css";
import clsx from "clsx";
import { useContext } from "react";
import Context from "../App/Context";
import IconButton from "../Buttons/IconButton";
import { FiSave } from "react-icons/fi";
function ListOfLists() {
  const { isAdding, data, hasChecks } = useContext(Context);
  return (
    <div
      className={clsx(
        styles.cont,
        !isAdding && styles.show,
        isAdding && styles.hide,
      )}
    >
      <ListOfElements timezone="Morning" elements={data.morning} />
      <ListOfElements timezone="Midday" elements={data.midday} />
      <ListOfElements timezone="Afternoon" elements={data.afternoon} />
      <ListOfElements timezone="Evening" elements={data.evening} />
      <ListOfElements timezone="Night" elements={data.night} />
      <div
        className={clsx(
          styles.saveCont,
          hasChecks ? styles.showSave : styles.hideSave,
        )}
      >
        <IconButton icon={<FiSave />} text="Save Progress" />
      </div>
    </div>
  );
}

export default ListOfLists;
