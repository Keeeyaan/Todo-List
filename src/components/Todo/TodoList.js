import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const Todolist = (props) => {
  return (
    <ul className={classes["todo-list"]}>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} todo={todo.todo} />
      ))}
    </ul>
  );
};

export default Todolist;
