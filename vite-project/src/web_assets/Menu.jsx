import React from "react";

import Container from "@mui/material/Container"
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Menu = () => {
  return (
    <Grid container 
      spacing={2}
    >
        <Grid item xs={4}>Logo</Grid>
        <Grid item xs={8}>Menu</Grid>
    </Grid>
  );
};

export default Menu;
