import React, { useState } from "react";

import Grid from "@mui/material/Grid";

import { AboutContext } from "../contexts/AboutContext";
import InputTitulo from "./about/InputTitulo";
import Titulo from "./about/Titulo";

const About = () => {
  const [value, setValue] = useState("");

  return (
    <AboutContext.Provider value={{ value, setValue }}>
      <Grid
        container
        direction="column"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <Grid item xs={12} md={4}>
          <Titulo />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputTitulo />
        </Grid>
      </Grid>
    </AboutContext.Provider>
  );
};

export default About;
