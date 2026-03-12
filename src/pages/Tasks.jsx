import tasks from "../data/tasks";

function Tasks() {
  return (
    <div>
      <h2>Tasks</h2>

      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
}

export default Tasks;
