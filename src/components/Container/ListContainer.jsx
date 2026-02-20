import styles from "./ListContainer.module.css";
import clsx from "clsx";
import Container from "./Container";
import ListOfLists from "../List/ListOfLists";
import { useContext } from "react";
import Context from "../App/Context";
function ListContainer({ active }) {
  const { data } = useContext(Context);
  const isEmpty =
    !data ||
    Object.keys(data).length === 0 ||
    Object.values(data).every((col) => col.length === 0);
  return (
    <div
      className={clsx(
        styles.cont,
        !active && styles.hide,
        active && styles.show,
      )}
    >
      <div className={isEmpty ? styles.messageCont : styles.hideMessage}>
        <pre>{"Add a task to start"}</pre>
      </div>
      <Container />
      <ListOfLists />
    </div>
  );
}
export default ListContainer;
