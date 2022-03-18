import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(enteredTodo.trim().length > 0);
  }, [enteredTodo]);

  const inputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };
  const submitHandler = (event) => {
    setFormIsValid(enteredTodo.trim().length > 0);
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    props.onSaveInputData({
      completed: false,
      id: Math.floor(Math.random() * 10000).toString(),
      todo: enteredTodo,
    });

    setEnteredTodo("");
  };

  return (
    <React.Fragment>
      <form className={classes["todo-form"]} onSubmit={submitHandler}>
        <Input
          placeholder="Add a todo"
          value={enteredTodo}
          onChange={inputChangeHandler}
          type="text"
        />
        <button className={classes.button}>ADD</button>
      </form>
    </React.Fragment>
  );
};

export default TodoForm;
