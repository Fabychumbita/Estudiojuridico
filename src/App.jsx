import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Especialidades from "./components/Especialidades.jsx";
import TodoList from "./components/TodoList.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
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
  return (
    <>
      <Navbar />

      <Hero />
      <section className="tareas-container">
       <TodoList tasks={tasks} completeTask={completeTask} />
        <Form addTask={addTask} />
      </section>
      <Especialidades />
      <Footer />
    </>
  );
}

export default App;
