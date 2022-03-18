import React from "react";
import classes from "./CheckBox.module.css";

const CheckBox = (props) => {

  const style = `${classes.checkbox} ${props.className}`
  return (
    <React.Fragment>
      <input type="checkbox" className={style} />
    </React.Fragment>
  );
};

export default CheckBox;
