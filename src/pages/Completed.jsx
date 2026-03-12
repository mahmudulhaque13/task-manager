import tasks from "../data/tasks";

function Completed() {
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div>
      <h2>Completed Tasks</h2>

      {completedTasks.map((t) => (
        <p key={t.id}>{t.title}</p>
      ))}
    </div>
  );
}

export default Completed;
