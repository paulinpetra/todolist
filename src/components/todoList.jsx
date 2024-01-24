import { useState } from "react";
import TodoItem from "./toDoItem";
import styles from "./todoList.module.css";
import { v4 as uuidv4 } from "uuid";

//Parent component

const TodoList = () => {
  //State Initialization:
  const [todos, setTodos] = useState([]); //An array to hold the todo:s
  const [currentTodo, setCurrentTodo] = useState(""); //A string to hold the current input value

  //Function Definitions:

  //For the Add button
  const addTodo = () => {
    if (currentTodo.trim())
      setTodos([
        ...todos,
        { id: uuidv4(), text: currentTodo.trim(), isCompleted: false },
      ]); //adds a new todo obejct with input value beeing the text
    setCurrentTodo(""); //resets the input field
  };

  //For the checkbox
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };
  //For the remove button
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Component render:
  return (
    <div role="list" className={styles.container}>
      <h1>To-Do List</h1>
      <input
        className={styles.inputField}
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
        aria-label="New todo"
      />
      <button className={styles.addButton} onClick={addTodo}>
        Add
      </button>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo} //prop (the todo object)
          completeTodo={() => completeTodo(todo.id)}
          removeTodo={() => removeTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
