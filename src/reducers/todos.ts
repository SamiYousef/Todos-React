import { v4 as uuidv4 } from "uuid";
import { ADD_TODO, TOGGLE_TODO } from "../actions";
import { ITodo } from "../types";

interface ITodoAction {
  type: string;
  todo?: string;
  id?: string;
}

const todos = (store: ITodo[] = [], action: ITodoAction): ITodo[] => {
  console.log(store);
  switch (action.type) {
    case ADD_TODO:
      if (!action.todo) {
        return store;
      }
      return [...store, { id: uuidv4(), text: action.todo, completed: false }];
    case TOGGLE_TODO:
      return store.map((todo: ITodo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return store;
  }
};

export default todos;
