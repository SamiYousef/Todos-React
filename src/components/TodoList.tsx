import { ITodo } from "../types";

interface ITodoList {
  todos: ITodo[];
  toggleTodo: (id: string) => void;
}
export default function TodoList({ todos, toggleTodo }: ITodoList) {
  return (
    <ul>
      {todos.map((item: ITodo) => (
        <li
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            textAlign: "left"
          }}
          key={item.id}
          onClick={() => toggleTodo(item.id)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}
