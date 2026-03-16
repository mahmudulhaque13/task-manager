function Completed({ tasks }) {
  const completedTasks = tasks.filter((t) => t.completed);
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div>
      <h2>Completed Tasks</h2>

      {completedTasks.map((t) => (
        <p key={t.id}>{t.title}</p>
      ))}
      <p>Completed: {completedCount}</p>
    </div>
  );
}

export default Completed;
