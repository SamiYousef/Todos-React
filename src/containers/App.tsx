import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import { ITodo, LinkType } from "../types";
import "../styles.css";

const App: React.FC = () => {
  const [todos, setTodo] = useState<ITodo[]>([]);
  const [activeLink, setActiveLink] = useState<LinkType>(LinkType.All);

  const addTodoHandler = (todo: string) => {
    setTodo((prev) => [
      ...prev,
      {
        id: uuidv4(),
        text: todo,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const linkClickHandler = (link: LinkType) => {
    setActiveLink(link);
  };

  const todoList = () => {
    switch (activeLink) {
      case LinkType.Completed:
        return todos.filter((todo) => todo.completed);
      case LinkType.Active:
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <AddTodo addTodo={addTodoHandler} />
      <TodoList todos={todoList()} toggleTodo={toggleTodo} />
      <Footer activeLink={activeLink} linkClickHandler={linkClickHandler} />
    </div>
  );
};

export default App;
