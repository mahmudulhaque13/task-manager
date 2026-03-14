import { useState } from "react";
import { Link } from "react-router-dom";

function Tasks({ tasks, setTasks }) {
  const [title, setTitle] = useState("");

  function addTask() {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  }

  function deleteTask(id) {
    const updated = tasks.filter((t) => t.id !== id);

    setTasks(updated);
  }

  function toggleComplete(id) {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );

    setTasks(updated);
  }

  return (
    <div>
      <h2>All Tasks</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>

          <Link to={`/tasks/${task.id}`}>Details</Link>

          <button onClick={() => toggleComplete(task.id)}>Complete</button>

          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
