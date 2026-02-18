import { useEffect, useState } from "react";
import Context from "./Context";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import TaskLogic from "./TaskLogic";

function AppProvider({ children, page, setPage, setYear, setMonth }) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [isAdding, setIsAdding] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [specific, setSpecific] = useState(null);
  const { data, setData } = TaskLogic();

  useEffect(() => {
    async function loadData() {
      console.log("re");
      try {
        setPage(-1);
        const docRef = doc(db, "users", "Ameer-dev");
        const snapshot = await getDoc(docRef);
        await sleep(500);
        setPage(0);

        if (snapshot.exists()) {
          setData(snapshot.data().tasks);
        }
      } catch (e) {
        console.error(e);
      }
    }

    loadData();
  }, [setPage]);

  // useEffect(() => {
  //  async function saveDayData() {
  //   const docRef = doc(db, "users", 'ameer-dev', 'days');
  //  }
  // })

  function togglePage(index = null) {
    if (index !== null) {
      setPage(index);
    }
  }
  function toggleAdding() {
    setIsAdding((prev) => !prev);
  }
  function addTask(time, task, category) {
    const generatedId =
      task
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .trim()
        .split(/\s+/)
        .join("_") +
      "_in_" +
      time;
    const newTask = {
      id: generatedId,
      text: task,
      status: null,
      category: category,
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
  function setCurrentMonth(month) {
    setMonth(month);
  }
  function setCurrentyear(year) {
    setYear(year);
  }
  const context = {
    isMainPage: page === 0,
    togglePage: togglePage,
    setMonth: setCurrentMonth,
    setYear: setCurrentyear,
    setSpecific: setS,
    specificTime: specific,
    add: addTask,
    del: deleteTask,
    up: moveUp,
    down: moveDown,
    setData: setData,
    data: data,
    isAdding: isAdding,
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
