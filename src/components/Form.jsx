function Form() {
  return (
    <div className="form-tarea">
      <h2>Nueva Tarea</h2>

      <label>Descripción de la tarea</label>

      <textarea
        placeholder="Ej: Revisar expediente..."
      ></textarea>

      <button>Agregar Tarea</button>
    </div>
  );
}

export default Form;