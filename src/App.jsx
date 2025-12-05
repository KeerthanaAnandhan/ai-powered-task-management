import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { useState, useEffect } from "react";

const AdminRoute = ({ role, children }) => {
  return role === "admin" ? children : <h1 className="text-center mt-20 text-red-600 text-2xl">Not Authorized</h1>;
};

function App() {
  const [role, setRole] = useState(() => {
    // Keep role persistent in sessionStorage
    return sessionStorage.getItem("role") || "user";
  });

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  // Save role in sessionStorage
  useEffect(() => {
    sessionStorage.setItem("role", role);
  }, [role]);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), completed: false, createdAt: new Date(), deadline: null };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const predictDeadline = (id) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id !== id) return t;
        const now = new Date();
        let days = 2;
        switch (t.complexity) {
          case "easy": days = 2; break;
          case "medium": days = 5; break;
          case "hard": days = 10; break;
        }
        return { ...t, deadline: new Date(now.getTime() + days * 24*60*60*1000) };
      })
    );
  };

  return (
    <BrowserRouter>
      <Navbar role={role} setRole={setRole} />
      <Routes>
        <Route path="/" element={<Home role={role} tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />} />
        <Route path="/admin" element={
          <AdminRoute role={role}>
            <Admin tasks={tasks} addTask={addTask} toggleTask={toggleTask} removeTask={removeTask} predictDeadline={predictDeadline} />
          </AdminRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
