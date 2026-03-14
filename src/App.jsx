import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import Completed from "./pages/Completed";
import NotFound from "./pages/NotFound";

import tasksData from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <BrowserRouter>
      <Navbar />

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
