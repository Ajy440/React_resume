import React from "react";
import { Grid, Box, Divider } from "@mui/material";
import { palette } from "@mui/system";

const Body = () => {
  return (
    <Box className="Body" sx={{}}>
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ bgcolor: "success.main" }}></Grid>
        <Grid item xs={10} sx={{ p: 2 }}>
          <h3>Work Experience</h3>
          <Divider variant="middle" sx={{ borderBottomWidth: 5 }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
