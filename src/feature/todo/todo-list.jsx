import { useState } from "react";
import { useGetTodosQuery } from "../api/todo-slice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const { data, isLoading, isSuccess, isError, error } = useGetTodosQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodo("");
  };
  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit"></button>
    </form>
  );

  let content;

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  );
};

export default TodoList;
