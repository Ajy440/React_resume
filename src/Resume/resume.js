import React from "react";
import { Grid, Box } from "@mui/material";
import { palette } from "@mui/system";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const resume = () => {
  return (
    <div>
      <Box sx={{ display: "inline-grid", width: "100%" }}>
        <Header />
        <Body />
        <Footer />
      </Box>
    </div>
  );
};

export default resume;
