function Todo({ task, index, completeTask, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      <div>
        <button onClick={() => completeTask(index)}>✔</button>
        <button onClick={() => deleteTask(index)}>🗑</button>
      </div>
    </li>
  );
}

export default Todo;