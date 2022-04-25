import React from "react";

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Menu from "../web_assets/Menu"
import Counter from "./counter/Counter";

const Home = () => {
  return (
    <Container maxWidth="xl" back>
      <Menu />
      <Grid 
        container 
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography>Pelicules y series ilimitadas y mucho mas.</Typography>
          <Typography>Disfruta donde quieras. Cancela cuando quieras.</Typography>
          <Typography>Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresia de Netflix.</Typography>
        </Grid>
      </Grid>

      <Counter />

    </Container>
  );
};

export default Home;
