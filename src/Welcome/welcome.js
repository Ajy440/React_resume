import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import Navbar from "./Navbar";
import Image from "./landing.jpg";

const welcome = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ display: "inline-grid", width: "100%" }}>
        <Box className="Body" sx={{}}>
          <Grid container spacing={2}>
            <Grid item xs={2} sx={{ p: 2 }}>
              Hi
            </Grid>
            <Grid item xs={10} sx={{ p: 2 }}></Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default welcome;
