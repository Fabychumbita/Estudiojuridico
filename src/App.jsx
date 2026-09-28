import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Especialidades from "./components/Especialidades.jsx";
import TodoList from "./components/TodoList.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
    <section className="tareas-container">
     <TodoList />
     <Form />
     </section>
    <Especialidades />
    <Footer/>

    </>
  );
}

export default App;