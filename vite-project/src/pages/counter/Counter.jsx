import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counter/counterSlice";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={11} md={8} lg={5} xl={3}>
          <Typography>El valor: {count}</Typography>
        </Grid>
        <Grid item xs={12} sm={11} md={8} lg={5} xl={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => dispatch(increment())}
          >
            Incrementar
          </Button>
        </Grid>
        <Grid item xs={12} sm={11} md={8} lg={5} xl={3}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => dispatch(decrement())}
          >
            Decremento
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Counter;
