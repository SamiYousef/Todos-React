import React, { FormEvent, useRef } from "react";

interface IAddTodo {
  addTodo: (todo: string) => void;
}

const AddTodo: React.FC<IAddTodo> = ({ addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputRef.current?.value.trim()) {
      return;
    }
    addTodo(inputRef.current.value);
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
