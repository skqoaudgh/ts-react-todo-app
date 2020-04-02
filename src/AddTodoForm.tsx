import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  } 

  const handleButton = (e: FormEvent<HTMLButtonElement>) => {
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="button" onClick={handleButton}>Add Todo</button>
    </form>
  );
}