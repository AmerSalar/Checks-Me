import { useState } from "react";
import Context from "./Context";

function AppProvider({ children }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [specific, setSpecific] = useState(null);
  const [data, setData] = useState({
    morning: ["wake up soon", "do fajr"],
    midday: ["pray dhuhr", "eat lunch"],
    afternoon: ["study well", "workout"],
    evening: ["eat dinner"],
    night: ["write your journal"],
  });
  function toggle() {
    setIsAdding((prev) => !prev);
  }
  function addTask(time, task) {
    setData((prev) => ({ ...prev, [time]: [...prev[time], task] }));
  }
  function setS(time) {
    setSpecific(time);
  }
  function toggleEdit() {
    setIsEdit((prev) => !prev);
  }
  const context = {
    setSpecific: setS,
    specificTime: specific,
    add: addTask,
    setData: setData,
    data: data,
    get: isAdding,
    set: toggle,
    toggleEdit: toggleEdit,
    isEdit: isEdit,
  };

  return (
    <>
      <Context.Provider value={context}>{children}</Context.Provider>
    </>
  );
}

export default AppProvider;
