import React from "react";

import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Grid container spacing={2} justifyContent="space-between">
      <Grid item xs={2}>
        <Link to="/">Home</Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/about-us">About</Link>
      </Grid>
    </Grid>
  );
};

export default Menu;
