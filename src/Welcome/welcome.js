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
            <Grid
              item
              xs={4}
              style={{
                paddingTop: "10%",
                paddingLeft: "3%",
                paddingRight: "5%",
              }}
            >
              <h1>
                Prepare,
                <br /> and get the Job you want..
              </h1>
              <h3>Craft a killer Tech Resume and land your dream job.</h3>
            </Grid>
            <Grid item xs={8} sx={{ p: 2 }}>
              <img
                src={Image}
                style={{ objectFit: "contain", width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default welcome;
