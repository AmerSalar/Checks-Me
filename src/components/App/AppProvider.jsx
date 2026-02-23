import { useEffect, useState } from "react";
import Context from "./Context";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import TaskLogic from "./TaskLogic";

function AppProvider({ children, page, setPage, setYear, setMonth }) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [isAdding, setIsAdding] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [specific, setSpecific] = useState(null);
  const [hasChecks, setHasChecks] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { data, setData } = TaskLogic();
  const userID = "ameer-dev";

  useEffect(() => {
    async function loadDailyData() {
      try {
        setPage(-1);
        const docRef = doc(db, "users", userID, "data", "routine");
        const snapshot = await getDoc(docRef);
        setPage(0);

        if (snapshot.exists()) {
          setData(snapshot.data().dailyTasks);
        } else {
          console.log("no exist");
        }
        setIsLoaded(true);
      } catch (e) {
        setPage(0);
        console.error(e);
        handleErrors("Couldn't load tasks!");
      }
    }

    loadDailyData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function saveDailyData() {
      try {
        const docRef = doc(db, "users", userID, "data", "routine");
        await setDoc(docRef, { dailyTasks: data });
      } catch (e) {
        console.error(e);
        handleErrors("We couldn't save information!");
      }
    }
    if (isLoaded) {
      saveDailyData();
    }
  }, [data, isLoaded]);

  // Save progress to archive:
  async function saveTodayProgress() {
    const date = new Date();
    const today = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    const todayStr = today.join("-");
    let newData = {};
    for (let time of Object.keys(data)) {
      newData[time] = data[time].map((task) => {
        return task.status !== null ? task : { ...task, status: "red" };
      });
    }

    const docRef = doc(
      db,
      "users",
      userID,
      "data",
      "archive",
      "daily_records",
      todayStr,
    );
    await setDoc(docRef, { record: newData });
    handleSuccess("Progress saved!");
    console.log(todayStr);
  }
  useEffect(() => {
    console.log("rendered!");
    function lookForChecks() {
      const hasCheck = Object.values(data).some((category) =>
        category.some((task) => {
          return task.status !== null;
        }),
      );
      return hasCheck;
    }
    setHasChecks(lookForChecks());
  }, [data]);

  function updateTaskStatus(id, time, status) {
    const updatedArray = data[time].map((task) => {
      if (task.id === id) {
        return { ...task, status: status };
      }
      return task;
    });
    setData((prev) => ({ ...prev, [time]: updatedArray }));
  }
  function togglePage(index = null) {
    if (index !== null) {
      setPage(index);
    }
  }
  function toggleAdding() {
    setIsAdding((prev) => !prev);
  }
  async function addTask(time, task, category) {
    const generatedId =
      task
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .trim()
        .split(/\s+/)
        .join("_") +
      "_" +
      time +
      "_" +
      category;
    const newTask = {
      id: generatedId,
      text: task,
      status: null,
      category: category,
    };

    if (data[time]) {
      if (data[time].some((task) => task.id === generatedId)) {
        handleErrors("The task already exists!");
      } else {
        setData((prev) => ({ ...prev, [time]: [...prev[time], newTask] }));
        await sleep(1000);
      }
    } else {
      setData((prev) => ({ ...prev, [time]: [newTask] }));
      await sleep(1000);
    }
  }
  async function deleteTask(id = null, time = null) {
    if (id !== null || time !== null) {
      const filteredData = data[time].filter((e) => e.id !== id);
      setData((prev) => ({ ...prev, [time]: filteredData }));
      await sleep(1000);
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
  function handleErrors(message) {
    setError(message);
    setTimeout(() => setError(null), 3000);
  }
  function handleSuccess(message) {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 2000);
  }
  const context = {
    error: error,
    setError: setError,
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
    updateTaskStatus: updateTaskStatus,
    hasChecks: hasChecks,
    saveTodayProgress: saveTodayProgress,
    successMessage: successMessage,
    setSuccessMessage: setSuccessMessage,
  };

  return (
    <>
      <Context.Provider value={context}>{children}</Context.Provider>
    </>
  );
}
export default AppProvider;
