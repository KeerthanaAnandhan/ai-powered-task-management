export default function AIDeadline({ task, onSave }) {
  const predict = () => {
    let reason = "";
    if(task.complexity === "easy") reason = "Should be completed in 2 days";
    else if(task.complexity === "medium") reason = "Should be completed in 5 days";
    else reason = "Should be completed in 7 days";
    onSave(task.id, { reason });
  };

  return <button onClick={predict} className="mt-2 px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 text-sm">Predict Deadline</button>;
}
