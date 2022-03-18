import React from "react";
import classes from "./TodoItem.module.css";
import CheckBox from "../UI/CheckBox";

const TodoItem = (props) => {
  return (
    <li key={props.id} className={classes["todo-item"]}>
      <CheckBox className={classes.checkbox}/>
      <h5>{props.todo}</h5>
    </li>
  );
};

export default TodoItem;
