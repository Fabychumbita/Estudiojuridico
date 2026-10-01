import { useState } from "react";
import Todo from "./Todo";

function TodoList({ tasks, completeTask, deleteTask }) {
  const [filter, setFilter] = useState("Todas");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completadas") return task.completed;
    if (filter === "Incompletas") return !task.completed;
    return true;
  });

  return (
    <section className="tareas">
      <h2>Gestión de Tareas</h2>
      <p>Organizá las actividades del estudio jurídico</p>

      <div className="filtro">
        <label>🔎 Filtrar: </label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>Todas</option>
          <option>Completadas</option>
          <option>Incompletas</option>
        </select>
      </div>

      <div className="lista-tareas">
        {filteredTasks.map((task, index) => (
          <Todo
            key={index}
            task={task}
            index={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </section>
  );
}

export default TodoList;