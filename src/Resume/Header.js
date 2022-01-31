import React from "react";
import { Grid, Box } from "@mui/material";
import { palette } from "@mui/system";

const Header = () => {
  return (
    <Box className="Header" sx={{ bgcolor: "primary.main", p: 2 }}>
      <h1>User Name</h1>
      <h3>Title</h3>
      <p>User summary here</p>
    </Box>
  );
};

export default Header;
