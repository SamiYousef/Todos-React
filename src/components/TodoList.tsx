import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../actions";
import { ITodo, LinkType } from "../types";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store: { todos: ITodo[] }) => store.todos);
  const activeLink = useSelector((store: { link: LinkType }) => store.link);
  const toggleTodoItem = (id: string) => dispatch(toggleTodo(id));

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
    <ul>
      {todoList().map((item: ITodo) => (
        <li
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            textAlign: "left",
          }}
          key={item.id}
          onClick={() => toggleTodoItem(item.id)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
