import React from "react";
import classes from "./CheckBox.module.css";

const CheckBox = (props) => {
  const style = `${classes.checkbox} ${props.className}`;

  return <input type="checkbox" className={style} onClick={props.onClick} />;
};

export default CheckBox;
