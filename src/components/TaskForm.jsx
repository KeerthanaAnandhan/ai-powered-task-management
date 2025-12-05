import { useState } from "react";
import dayjs from "dayjs";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complexity, setComplexity] = useState("easy");

  const calculateDeadline = (level) => {
    const now = dayjs();
    if (level === "easy") return now.add(2, "day").toDate();
    if (level === "medium") return now.add(5, "day").toDate();
    if (level === "hard") return now.add(10, "day").toDate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const deadline = calculateDeadline(complexity);
    addTask({ title, description, complexity, deadline, assignee: "user" });
    setTitle("");
    setDescription("");
    setComplexity("easy");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md space-y-3">
      <input className="w-full p-2 border rounded bg-transparent dark:border-slate-700" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
      <textarea className="w-full p-2 border rounded h-20 bg-transparent dark:border-slate-700" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task description (optional)" />
      <select className="p-2 border rounded bg-transparent dark:border-slate-700" value={complexity} onChange={(e) => setComplexity(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold">Add Task</button>
    </form>
  );
}
