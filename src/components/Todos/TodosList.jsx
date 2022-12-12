import { Grid, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

export default () => {
  const todosList = useSelector((state) => state.todos.todosList);
  const classes = useStyle();

  return (
    <div className={classes.todosListContainer}>
      {Object.entries(todosList).map(([key, { taskText, isEditing }]) => (
        <Grid xs={12} item key={key}>
          {!isEditing ? (
            <TodoItem elementKey={key} taskText={taskText} />
          ) : (
            <EditTodo elementKey={key} taskText={taskText} />
          )}
        </Grid>
      ))}
    </div>
  );
};

const useStyle = makeStyles(() => ({
  todosListContainer: { height: "54vh", overflowY: "auto" },
}));
