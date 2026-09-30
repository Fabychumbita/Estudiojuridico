import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Especialidades from "./components/Especialidades.jsx";
import TodoList from "./components/TodoList.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import { useState,useEffect } from "react";
function App() {
 const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
  const addTask = (task) => {
    const newTask = {
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };
  const completeTask = (index) => {
  const newTasks = [...tasks];
  newTasks[index].completed = !newTasks[index].completed;
  setTasks(newTasks);
};

const deleteTask = (index) => {
  const newTasks = tasks.filter((task, i) => i !== index);
  setTasks(newTasks);
};
  return (
    <>
      <Navbar />

      <Hero />
      <section className="tareas-container">
        <TodoList
     tasks={tasks}
     completeTask={completeTask}
     deleteTask={deleteTask}
     />
        <Form addTask={addTask} />
      </section>
      <Especialidades />
      <Footer />
    </>
  );
}

export default App;
