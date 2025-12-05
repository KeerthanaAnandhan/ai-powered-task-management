import dayjs from "dayjs";

function statusOf(task) {
  if (task.completed) return "Completed";
  if (!task.deadline) return "Pending";
  const now = new Date();
  return now > task.deadline ? "Overdue" : "Pending";
}

export default function TaskCard({ task, toggleTask, removeTask, isAdmin, predictDeadline }) {
  const status = statusOf(task);
  const statusClass = status === "Completed" ? "bg-green-600" : status === "Overdue" ? "bg-red-600" : "bg-yellow-500";

  return (
    <div className="p-4 rounded-xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4
      bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all">

      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className={`${task.completed ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"} font-semibold text-lg`}>
            {task.title}
          </h3>
          <span className="text-xs text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded">{task.assignee}</span>
          <span className={`text-xs text-white px-2 py-0.5 rounded ${statusClass}`}>{status}</span>
        </div>

        {task.description && <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{task.description}</p>}

        <div className="mt-2 text-xs text-gray-700 dark:text-gray-300 space-y-1">
          <div>Difficulty: <strong className="text-gray-900 dark:text-gray-200">{task.complexity}</strong></div>
          <div>Created: {dayjs(task.createdAt).format("DD MMM YYYY, HH:mm")}</div>
          {task.deadline && <div>Deadline: {dayjs(task.deadline).format("DD MMM YYYY")}</div>}
        </div>
      </div>

      <div className="flex gap-2 items-center flex-wrap mt-2 md:mt-0">
        <button onClick={() => toggleTask(task.id)} className={`px-3 py-1 rounded-lg text-white ${task.completed ? "bg-slate-500 hover:bg-slate-600" : "bg-green-600 hover:bg-green-700"}`}>
          {task.completed ? "Undo" : "Done"}
        </button>
        {isAdmin && (
          <>
            <button onClick={() => removeTask(task.id)} className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white">Delete</button>
            {!task.deadline && <button onClick={() => predictDeadline(task.id)} className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-white">Predict Deadline</button>}
          </>
        )}
      </div>
    </div>
  );
}
