import tasks from "../data/tasks";
import { Link } from "react-router-dom";

function Tasks() {
  return (
    <div>
      <h2>All Tasks</h2>

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
