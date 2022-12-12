import { IconButton, makeStyles, Paper } from "@material-ui/core";
import { Build, Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import { deleteTask, editTask } from "../../redux/todos/slice";

export default ({ elementKey, taskText }) => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const onDelete = () => {
    dispatch(deleteTask(elementKey));
  };

  const onEdit = () => {
    dispatch(editTask(elementKey));
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <span>{taskText}</span>
      <IconButton
        color="primary"
        aria-label="Edit"
        className={classes.icon}
        onClick={() => onEdit()}
      >
        <Build fontSize="small" />
      </IconButton>
      <IconButton
        color="secondary"
        aria-label="Delete"
        onClick={() => onDelete()}
      >
        <Delete fontSize="small" />
      </IconButton>
    </Paper>
  );
};

const useStyle = makeStyles(() => ({
  icon: {
    marginLeft: "auto",
  },
  paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    width: 500,
  },
}));
