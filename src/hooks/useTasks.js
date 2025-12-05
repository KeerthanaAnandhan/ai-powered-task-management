import { useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  const predictDeadline = (difficulty) => {
    const now = new Date();
    let days = 1;

    if (difficulty === "easy") days = 1;
    if (difficulty === "medium") days = 3;
    if (difficulty === "hard") days = 5;

    now.setDate(now.getDate() + days);
    return now.toISOString();
  };

  const addTask = ({ title, description, assignee, difficulty }) => {
    const deadline = predictDeadline(difficulty);

    const newTask = {
      id: Date.now(),
      title,
      description,
      assignee,
      difficulty,
      deadline,
      completed: false,
    };

    setTasks((prev) =>
      [...prev, newTask].sort(
        (a, b) => new Date(a.deadline) - new Date(b.deadline)
      )
    );
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, removeTask };
}
