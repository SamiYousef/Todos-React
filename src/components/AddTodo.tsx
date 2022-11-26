import React, { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputRef.current?.value.trim()) {
      return;
    }
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmitTodo}>
        <input type="text" ref={inputRef} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
