import { Button, Input, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todos/actions";

export default () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyle();

  const onAdd = () => {
    if (!task) return setError(true);
    setError(false);
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className={classes.todosAdding}>
      <h2>My To Do List</h2>
      <div className={classes.formContainer}>
        <Input
          className={classes.input}
          placeholder="Todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? onAdd() : () => {})}
        />
        <Button variant="contained" color="primary" onClick={onAdd}>
          Add
        </Button>
        <p className={error ? classes.show : classes.hide}>
          Error, must enter a value!
        </p>
      </div>
    </div>
  );
};

const useStyle = makeStyles(() => ({
  input: {
    width: "90%",
  },
  todosAdding: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    display: "flex",
    boxShadow:
      "0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%)",
    padding: "40px",
    margin: "auto",
    textAlign: "center",
    width: "500px",
    borderRadius: "4px",
  },
  hide: {
    display: "none",
  },
  show: {
    display: "block",
    color: "red",
  },
}));
