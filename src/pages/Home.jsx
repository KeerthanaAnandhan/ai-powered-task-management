import TaskCard from "../components/TaskCard";

export default function Home({ role, tasks, toggleTask, removeTask }) {
  const visibleTasks = tasks.filter(t => t.assignee === "user");
  return (
    <div className="pt-24 px-4 pb-10 min-h-screen bg-gray-50 dark:bg-slate-900 space-y-4">
      <h2 className="text-3xl font-bold mb-2">User Dashboard</h2>
      {visibleTasks.length === 0 ? (
        <div className="p-4 rounded-lg bg-white dark:bg-slate-800 text-center shadow">No tasks assigned yet.</div>
      ) : (
        visibleTasks.map(t => <TaskCard key={t.id} task={t} toggleTask={toggleTask} removeTask={removeTask} />)
      )}
    </div>
  );
}
