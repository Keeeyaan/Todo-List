import React, { useState } from "react";
import classes from "./TodoItem.module.css";
import CheckBox from "../UI/CheckBox";
import { RiCloseCircleLine } from "react-icons/ri";

const TodoItem = (props) => {
  const [textCheck, setNewTextCheck] = useState(false);

  const removeHandler = () => {
    props.onRemove(props.id);
  };

  const checkHandler = () => {
    if (textCheck) {
      setNewTextCheck(false);
    } else {
      setNewTextCheck(true);
    }
  };

  return (
    <li className={classes["todo-item"]}>
      <div className={classes.t}>
        <CheckBox className={classes.checkbox} onClick={checkHandler} />
        <h5 className={classes[textCheck ? "text-checked" : ""]}>
          {props.todo}
        </h5>
      </div>
      <RiCloseCircleLine className={classes.delete} onClick={removeHandler} />
    </li>
  );
};

export default TodoItem;
