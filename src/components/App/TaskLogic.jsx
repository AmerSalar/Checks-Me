import { useState } from "react";
const TaskLogic = () => {
  const [data, setData] = useState({
    morning: [
      {
        id: "wake_up_early",
        text: "Wake up early",
        status: null,
        category: "routine",
        streak: 0,
      },
      {
        id: crypto.randomUUID(),
        text: "Pray al-Fajr",
        status: null,
        category: "religion",
        streak: 0,
      },
    ],
    midday: [
      {
        id: crypto.randomUUID(),
        text: "Pray ad-Duhr",
        status: null,
        category: "religion",
        streak: 0,
      },
      {
        id: crypto.randomUUID(),
        text: "Eat clean food",
        status: null,
        category: "meal",
        streak: 0,
      },
    ],
    afternoon: [
      {
        id: crypto.randomUUID(),
        text: "Pray al-Asir",
        status: null,
        category: "religion",
        streak: 0,
      },
      {
        id: crypto.randomUUID(),
        text: "Study session 1 hour",
        status: null,
        category: "learning",
        streak: 0,
      },
    ],
    evening: [
      {
        id: crypto.randomUUID(),
        text: "Pray al-Maghrib",
        status: null,
        category: "religion",
        streak: 0,
      },
      {
        id: crypto.randomUUID(),
        text: "Eat clean food",
        status: null,
        category: "meal",
        streak: 0,
      },
    ],
    night: [
      {
        id: crypto.randomUUID(),
        text: "Pray al-Isha",
        status: null,
        category: "religion",
        streak: 0,
      },
      {
        id: crypto.randomUUID(),
        text: "Sleep before 11pm",
        status: null,
        category: "routine",
        streak: 0,
      },
    ],
  });

  return { data, setData };
};
export default TaskLogic;
