import { useState } from "react";

function Form( {addTask}) {
  const [task, setTask] = useState("");
      const handleSubmit = () => {
       if (task.trim() !== "") {
        addTask(task);
        setTask("");
    }
  };
  return (
    <div className="form-tarea">
      <h2>Nueva Tarea</h2>

      <label> 📝 Descripción de la tarea</label>
     <input
  type="text"
  placeholder="Ej: Revisar expediente..."
  value={task}
  onChange={(e) => setTask(e.target.value)}
/>
     

      <button onClick={handleSubmit}>Agregar Tarea</button>
    </div>
  );
}

export default Form;
