import React from "react";
import { ITodo } from "../types";

interface ITodoList {
  todos: ITodo[];
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((item: ITodo) => (
        <li
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            textAlign: "left",
          }}
          key={item.id}
          onClick={() => toggleTodo(item.id)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
