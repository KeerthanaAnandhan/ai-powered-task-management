import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

export default function Admin({ tasks, addTask, toggleTask, removeTask, predictDeadline }) {
  return (
    <div className="pt-24 px-4 pb-10 min-h-screen bg-gray-50 dark:bg-slate-900 space-y-4">
      <h2 className="text-3xl font-bold mb-2">Admin Dashboard</h2>
      <p className="text-gray-500 dark:text-gray-300 mb-4">Create tasks and predict deadlines automatically.</p>

      <TaskForm addTask={addTask} />

      <div className="space-y-4 mt-4">
        {tasks.length === 0 ? (
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800 text-center shadow">No tasks yet.</div>
        ) : (
          tasks.map(t => <TaskCard key={t.id} task={t} toggleTask={toggleTask} removeTask={removeTask} isAdmin predictDeadline={predictDeadline} />)
        )}
      </div>
    </div>
  );
}