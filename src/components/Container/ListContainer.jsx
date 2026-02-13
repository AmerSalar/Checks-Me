import styles from "./ListContainer.module.css";
import clsx from "clsx";
import Container from "./Container";
import ListOfLists from "../List/ListOfLists";
import {} from "react";
function ListContainer({ active }) {
  return (
    <div
      className={clsx(
        styles.cont,
        !active && styles.hide,
        active && styles.show,
      )}
    >
      <Container />
      <ListOfLists />
    </div>
  );
}
export default ListContainer;
