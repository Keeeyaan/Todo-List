import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import classes from "./Todo.module.css";

const Todo = () => {
  const [todos, setNewTodos] = useState([]);
  const [status, setNewStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodoHandler = (newTodo) => {
    setNewTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const removeTodoHandler = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setNewTodos(removeArr);
  };

  const checkCompletedHandler = (status) => {
    const test = todos.map((item) => {
      if (item.id === status) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setNewTodos(test);
  };

  const statusCompletedHandler = () => {
    setNewStatus("completed");
  };
  const statusAllHandler = () => {
    setNewStatus("all");
  };
  const statusUnCompletedHandler = () => {
    setNewStatus("uncompleted");
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const saveDateHandler = (date) => {};

  return (
    <div className={classes.todo}>
      <nav className={classes.container}>
        <button className={classes.button} onClick={statusCompletedHandler}>
          COMPLETED
        </button>
        <button className={classes.button} onClick={statusAllHandler}>
          ALL
        </button>
        <button className={classes.button} onClick={statusUnCompletedHandler}>
          UNCOMPLETED
        </button>
        <div className={classes.animation} />
        <div className={classes.line} />
      </nav>
      <div className={classes.wrapper}>
        <TodoDate onSaveDate={saveDateHandler} />
        <TodoForm onSaveInputData={addTodoHandler} />
        <TodoList
          todos={filteredTodos}
          removeTodo={removeTodoHandler}
          status={checkCompletedHandler}
        />
      </div>
    </div>
  );
};

export default Todo;
