function TodoList({ tasks }) {
  return (
    <section className="tareas">
      <h2>Gestión de Tareas</h2>
      <p>Organizá las actividades del estudio jurídico</p>

      <div className="filtro">
        <label>Filtrar: </label>

        <select>
          <option>Todas</option>
          <option>Completadas</option>
          <option>Incompletas</option>
        </select>
      </div>

      <div className="lista-tareas">
        {tasks.map((task, index) => (
          <p key={index}>□ {task}</p>
        ))}
      </div>
    </section>
  );
}

export default TodoList;
