import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={classes.input}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
