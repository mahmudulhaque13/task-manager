import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import Completed from "./pages/Completed";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tasks" element={<Tasks />} />

        <Route path="/tasks/:id" element={<TaskDetails />} />

        <Route path="/completed" element={<Completed />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
