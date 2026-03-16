import { Link } from "react-router-dom";

function Navbar({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;

  const pending = tasks.filter((t) => !t.completed).length;

  return (
    <nav>
      <Link to="/">Home</Link> |<Link to="/tasks">Tasks</Link> |
      <Link to="/completed">Completed</Link>
      <p>Total: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
    </nav>
  );
}

export default Navbar;
