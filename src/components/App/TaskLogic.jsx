import { useState } from "react";
const TaskLogic = () => {
  const [data, setData] = useState({
    morning: [
      {
        id: crypto.randomUUID(),
        text: "Wake up early",
        status: null,
        category: "routine",
      },
      {
        id: crypto.randomUUID(),
        text: "Pray al-Fajr",
        status: null,
        category: "religion",
      },
    ],
    midday: [
      {
        id: crypto.randomUUID(),
        text: "Pray ad-Duhr",
        status: null,
        category: "religion",
      },
      {
        id: crypto.randomUUID(),
        text: "Eat clean food",
        status: null,
        category: "meal",
      },
    ],
    afternoon: [
      {
        id: crypto.randomUUID(),
        text: "Pray al-Asir",
        status: null,
        category: "religion",
      },
      {
        id: crypto.randomUUID(),
        text: "Study session 1 hour",
        status: null,
        category: "learning",
      },
    ],
    evening: [
      {
        id: crypto.randomUUID(),
        text: "Pray al-Maghrib",
        status: null,
        category: "religion",
      },
      {
        id: crypto.randomUUID(),
        text: "Eat clean food",
        status: null,
        category: "meal",
      },
    ],
    night: [
      {
        id: crypto.randomUUID(),
        text: "Pray al-Isha",
        status: null,
        category: "religion",
      },
      {
        id: crypto.randomUUID(),
        text: "Sleep before 11pm",
        status: null,
        category: "routine",
      },
    ],
  });

  return { data, setData };
};
export default TaskLogic;
