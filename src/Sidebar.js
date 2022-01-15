import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsFillPersonFill } from "react-icons/bs";

const sideBar_Items = [
  { Icon: <BsFillPersonFill />, Name: "User", Index: "0" },
  { Icon: <BsFillPersonFill />, Name: "Projects", Index: "1" },
];

const Sidebar = (props) => {
  const items = sideBar_Items.map((item) => {
    return (
      <ListItemButton
        key={item.Index}
        selected={props.selectedIndex === item.Index}
        onClick={(event) => props.handleListItemClick(event, item.Index)}
      >
        <ListItemIcon>{item.Icon}</ListItemIcon>
        <ListItemText primary={item.Name} />
      </ListItemButton>
    );
  });

  return (
    <div>
      <Box sx={{ color: "#007fff" }}>
        <h1>Powered by Firebase</h1>
      </Box>
      <h1 />
      <Box
        sx={{
          width: "100%",
          bgcolor: "#0a1929",
          color: "background.paper",
        }}
      >
        <List
          component="nav"
          aria-label="main mailbox folders"
          sx={{ marginTop: "10%", color: "#e1f5fe" }}
        >
          {items}
        </List>
      </Box>
    </div>
  );
};

export default Sidebar;
