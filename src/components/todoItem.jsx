import styles from "./todoItem.module.css";
import { v4 as uuidv4 } from "uuid";

//Child component for each item in the list. Concists of a checkbox, item text and remove button.

const TodoItem = ({ todo, completeTodo, removeTodo }) => {
  //props (todo object, functions used on the component)
  return (
    <div className={styles.container} role="listitem">
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.isCompleted} //checked if the todo item is marked as completed
        onChange={() => completeTodo(todo.id)} //callback function for when clicked
        aria-labelledby={`todo-${todo.id}`} // connecting lable to the unique ID
      />
      <span id={`todo-${todo.id}`} className={styles.text}>
        {todo.text}
      </span>
      <button
        className={styles.removeButton}
        onClick={() => removeTodo(todo.id)} //callback function for removing the todo
        aria-label="Remove todo"
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
