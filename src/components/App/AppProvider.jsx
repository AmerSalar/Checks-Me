import { useState } from "react";
import Context from "./Context";

function AppProvider({ children }) {
  const [isAdding, setIsAdding] = useState(false);
  const [data, setData] = useState({
    morning: ["wake up soon", "do fajr"],
    midday: ["pray dhuhr", "eat lunch"],
    afternoon: ["study well", "workout"],
    evening: ["eat dinner"],
    night: ["write your journal"],
  });
  function addTask(time, task) {
    setData((prev) => ({ ...prev, [time]: [...prev[time], task] }));
  }
  const context = {
    add: addTask,
    setData: setData,
    data: data,
    get: isAdding,
    set: setIsAdding,
  };
  // function handleAddingTask() {
  //   setIsAdding((prev) => !prev);
  // }
  return (
    <>
      <Context.Provider value={context}>{children}</Context.Provider>
    </>
  );
}

export default AppProvider;
