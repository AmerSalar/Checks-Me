import { useEffect, useState } from "react";
import Context from "./Context";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

function AppProvider({ children, page, setPage, setYear, setMonth }) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [isAdding, setIsAdding] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [specific, setSpecific] = useState(null);
  const [data, setData] = useState({
    // morning: [
    //   { id: crypto.randomUUID(), text: "Wake up early" },
    //   { id: crypto.randomUUID(), text: "Pray Fajr" },
    //   { id: crypto.randomUUID(), text: "Eat breakfast" },
    // ],
    // midday: [
    //   { id: crypto.randomUUID(), text: "Pray Dhuhr" },
    //   { id: crypto.randomUUID(), text: "Eat lunch" },
    //   { id: crypto.randomUUID(), text: "Study session for 30 mins" },
    // ],
    // afternoon: [
    //   { id: crypto.randomUUID(), text: "Pray Asir" },
    //   { id: crypto.randomUUID(), text: "Workout session" },
    //   { id: crypto.randomUUID(), text: "Walk outside for 30 mins" },
    // ],
    // evening: [
    //   { id: crypto.randomUUID(), text: "Pray Maghrib" },
    //   { id: crypto.randomUUID(), text: "Eat dinner" },
    // ],
    // night: [
    //   { id: crypto.randomUUID(), text: "Pray Isha" },
    //   { id: crypto.randomUUID(), text: "Read or listen to educationals" },
    //   { id: crypto.randomUUID(), text: "Study session for 30 mins" },
    //   { id: crypto.randomUUID(), text: "Sleep before 10:00pm" },
    // ],
  });
  useEffect(() => {
    async function loadData() {
      console.log("re");
      try {
        setPage(-1);
        const docRef = doc(db, "users", "Ameer-dev");
        const snapshot = await getDoc(docRef);
        await sleep(2000);
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
  //   console.log("render");
  //   async function saveData() {
  //     if (!data || Object.keys(data).length === 0) return;
  //     const userDoc = doc(db, "users", "Ameer-dev");
  //     await setDoc(userDoc, { tasks: data });
  //   }

  //   if (data) saveData();
  // }, [data]);

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
