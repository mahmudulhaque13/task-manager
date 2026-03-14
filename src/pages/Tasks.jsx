import tasks from "../data/tasks";
import { Link } from "react-router-dom";

const [title, setTitle] = useState("");

function handleAdd() {
  const newTask = {
    id: Date.now(),
    title: title,
    completed: false,
  };

  setTasks([...tasks, newTask]);
  setTitle("");
}

function Tasks() {
  return (
    <div>
      <h2>All Tasks</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />

      <button onClick={handleAdd}>Add Task</button>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>

          <Link to={`/tasks/${task.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
