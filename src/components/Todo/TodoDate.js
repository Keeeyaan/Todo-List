import classes from "./TodoDate.module.css";

const TodoDate = (props) => {
  let date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const weekDay = date.toLocaleString("en-US", { weekday: "long" });
  const year = date.getFullYear();

  const d = {
    month: month,
    day: day,
    year: year,
  };

  props.onSaveDate(d);

  return (
    <div className={classes.container}>
      <div className={classes.date}>
        <h1>{day}</h1>
        <div className={classes.pad}>
          <h5>{month}</h5>
          <h5 className={classes.year}>{year}</h5>
        </div>
      </div>
      <h3>{weekDay}</h3>
    </div>
  );
};

export default TodoDate;
