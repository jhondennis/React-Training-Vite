import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Menu from "../web_assets/Menu";

const AppRoutes = () => {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Menu />
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export default AppRoutes;
