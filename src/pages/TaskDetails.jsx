import { useParams } from "react-router-dom";
import tasks from "../data/tasks";

function TaskDetails() {
  const { id } = useParams();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>Status: {task.completed ? "Done" : "Pending"}</p>
    </div>
  );
}

export default TaskDetails;
