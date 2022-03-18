import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import classes from "./Todo.module.css";

const Todo = () => {
  const [todos, setNewTodos] = useState([]);

  const addTodoHandler = (newTodo) => {
    setNewTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const removeTodoHandler = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setNewTodos(removeArr);
  };

  const saveDateHandler = (date) => {};

  return (
    <div className={classes.todo}>
      <nav className={classes.container}>
        <button className={classes.button}>Done</button>
        <button className={classes.button}>All</button>
        <button className={classes.button}>UnDone</button>
        <div className={classes.animation} />
        <div className={classes.line} />
      </nav>
      <div className={classes.wrapper}>
        <TodoDate onSaveDate={saveDateHandler} />
        <TodoForm onSaveInputData={addTodoHandler} />
        <TodoList todos={todos} removeTodo={removeTodoHandler} />
      </div>
    </div>
  );
};

export default Todo;
