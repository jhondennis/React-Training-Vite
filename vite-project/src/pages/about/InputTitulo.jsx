import React, { useContext } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { AboutContext } from "../../contexts/AboutContext";
import { useNavigate } from "react-router-dom";

const InputTitulo = () => {
  const { value, setValue } = useContext(AboutContext);
  const navigate = useNavigate();
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <TextField
          fullWidth
          size="small"
          label="ingrese el titulo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate("/")}
        >
          Ir al home con navigate
        </Button>
      </Grid>
    </Grid>
  );
};

export default InputTitulo;
