import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import "../styles.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todos</h1>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
