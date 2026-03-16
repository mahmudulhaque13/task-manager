import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import Completed from "./pages/Completed";
import NotFound from "./pages/NotFound";

function App() {
  const [tasks, setTasks] = useState([]);

  // load tasks
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));

    if (saved) {
      setTasks(saved);
    }
  }, []);

  // save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <Navbar tasks={tasks} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/tasks"
          element={<Tasks tasks={tasks} setTasks={setTasks} />}
        />

        <Route path="/tasks/:id" element={<TaskDetails tasks={tasks} />} />

        <Route path="/completed" element={<Completed tasks={tasks} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
