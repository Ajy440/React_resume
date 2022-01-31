import React from "react";
import { Grid, Box, Divider } from "@mui/material";
import { palette } from "@mui/system";

const Footer = () => {
  return (
    <Box className="Footer" sx={{ p: 2 }}>
      <h3>I hereby declare that</h3>
      <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
    </Box>
  );
};

export default Footer;
