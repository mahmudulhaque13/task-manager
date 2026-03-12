import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/tasks" element={<Tasks />} />

    <Route path="/tasks/:id" element={<TaskDetails />} />

    <Route path="/completed" element={<Completed />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>;
