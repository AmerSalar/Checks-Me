import { useState } from "react";
import Context from "./Context";

function AppProvider({ children, setPage }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [specific, setSpecific] = useState(null);
  const [data, setData] = useState({
    morning: [
      { id: crypto.randomUUID(), text: "Wake up early" },
      { id: crypto.randomUUID(), text: "Pray Fajr" },
      { id: crypto.randomUUID(), text: "Eat breakfast" },
    ],
    midday: [
      { id: crypto.randomUUID(), text: "Pray Dhuhr" },
      { id: crypto.randomUUID(), text: "Eat lunch" },
      { id: crypto.randomUUID(), text: "Study session for 30 mins" },
    ],
    afternoon: [
      { id: crypto.randomUUID(), text: "Pray Asir" },
      { id: crypto.randomUUID(), text: "Workout session" },
      { id: crypto.randomUUID(), text: "Walk outside for 30 mins" },
    ],
    evening: [
      { id: crypto.randomUUID(), text: "Pray Maghrib" },
      { id: crypto.randomUUID(), text: "Eat dinner" },
    ],
    night: [
      { id: crypto.randomUUID(), text: "Pray Isha" },
      { id: crypto.randomUUID(), text: "Read or listen to educationals" },
      { id: crypto.randomUUID(), text: "Study session for 30 mins" },
      { id: crypto.randomUUID(), text: "Sleep before 10:00pm" },
    ],
  });
  function togglePage(index = null) {
    if (index !== null) {
      setPage(index);
    }
  }
  function toggleAdding() {
    setIsAdding((prev) => !prev);
  }
  function addTask(time, task) {
    const newTask = {
      id: crypto.randomUUID(),
      text: task,
    };
    setData((prev) => ({ ...prev, [time]: [...prev[time], newTask] }));
  }
  function deleteTask(id = null, time = null) {
    if (id !== null || time !== null) {
      const filteredData = data[time].filter((e) => e.id !== id);
      setData((prev) => ({ ...prev, [time]: filteredData }));
    }
  }
  function moveUp(index = null, time = null) {
    if (index !== null || time !== null) {
      if (data[time][index - 1]) {
        const array = [...data[time]];
        [array[index - 1], array[index]] = [array[index], array[index - 1]];
        setData((prev) => ({ ...prev, [time]: array }));
      } else {
        console.log("Element is at the top!");
      }
    }
  }
  function moveDown(index = null, time = null) {
    if (index !== null || time !== null) {
      if (data[time][index + 1]) {
        const array = [...data[time]];
        [array[index + 1], array[index]] = [array[index], array[index + 1]];
        setData((prev) => ({ ...prev, [time]: array }));
      }
    } else {
      console.log("Element is at the bottom!");
    }
  }

  function setS(time) {
    setSpecific(time);
  }
  function toggleEdit() {
    setIsEdit((prev) => !prev);
  }
  const context = {
    togglePage: togglePage,
    setSpecific: setS,
    specificTime: specific,
    add: addTask,
    del: deleteTask,
    up: moveUp,
    down: moveDown,
    setData: setData,
    data: data,
    get: isAdding,
    toggleAdding: toggleAdding,
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
