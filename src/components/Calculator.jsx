import { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";

export default () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(null);

  const classes = useStyle();

  const onNumberClick = (e) => {
    setNum(num === 0 || operator ? e.target.value : num + e.target.value);
  };

  const onOperatorClick = (e) => {
    setOperator(e.target.value);
    setOldNum(num);
  };

  const onEqualClick = () => {
    setNum(eval(oldNum + operator + num));
  };

  const onClear = () => {
    setNum(0);
    setOldNum(0);
    setOperator(null);
  };

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className={classes.wrapper}>
          <Box m={12} />
          <h1 className={classes.resultado}>{num}</h1>
          <button className={classes.button} onClick={onClear}>AC</button>
          <button className={classes.button} onClick={() => {}}>+/-</button>
          <button className={classes.button} onClick={() => {}}>%</button>
          <button
            className={classes.button + " " + classes.orange}
            onClick={onOperatorClick}
            value={"/"}
          >
            /
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={7}
          >
            7
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={8}
          >
            8
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={9}
          >
            9
          </button>
          <button
            className={classes.button + " " + classes.orange}
            onClick={onOperatorClick}
            value={"*"}
          >
            X
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={4}
          >
            4
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={5}
          >
            5
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={6}
          >
            6
          </button>
          <button
            className={classes.button + " " + classes.orange}
            onClick={onOperatorClick}
            value={"-"}
          >
            -
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={1}
          >
            1
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={2}
          >
            2
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={3}
          >
            3
          </button>
          <button
            className={classes.button + " " + classes.orange}
            onClick={onOperatorClick}
            value={"+"}
          >
            +
          </button>
          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={0}
          >
            0
          </button>
          <button className={classes.button} style={{ visibility: "hidden" }}>k</button>

          <button
            className={classes.button + " " + classes.grey}
            onClick={onNumberClick}
            value={"."}
          >
            .
          </button>
          <button
            className={classes.button + " " + classes.orange}
            onClick={onEqualClick}
          >
            =
          </button>
        </div>
      </Container>
    </div>
  );
};

const useStyle = makeStyles(() => ({
  button: {
    width: "3em",
    height: "3em",
    fontSize: "1.5em",
    border: "none",
    borderRadius: "2em",
    margin: "0.3em",
    cursor: "pointer",
  },

  wrapper: {
    backgroundColor: "black",
    borderRadius: "1em",
    padding: "1em",
  },

  orange: {
    backgroundColor: "#ff9500",
    color: "white",
  },

  grey: {
    backgroundColor: "#505050",
    color: "white",
  },

  resultado: {
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "1em",
    fontSize: "3.5em",
  },
}));
