import { useParams, useNavigate } from "react-router-dom";

function TaskDetails({ tasks }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div>
      <h2>{task.title}</h2>

      <p>ID: {task.id}</p>

      <p>
        Status:
        {task.completed ? "Completed" : "Pending"}
      </p>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default TaskDetails;
