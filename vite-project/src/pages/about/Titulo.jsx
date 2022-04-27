import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { AboutContext } from "../../contexts/AboutContext";

const Titulo = () => {
  const { value } = useContext(AboutContext);
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="subtitle1">El titulo es:</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">
          {value === "" ? "Aqui va el titulo" : value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Titulo;
