import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function DrawerMenu({ handleLogout }) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <p className="pt-5 px-4 font-bold text-xl">Menu</p>
      <List>
        <ListItem button>
          <Link to={"dashboard"}>
            <ListItemText primary={"Dashboard"} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to={"transactions"}>
            <ListItemText primary={"Transactions"} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to={"menu-items"}>
            <ListItemText primary={"Menu Items"} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to={"inventory"}>
            <ListItemText primary={"Inventory"} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to={"reports"}>
            <ListItemText primary={"Reports"} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to={"users"}>
            <ListItemText primary={"Users/Employees"} />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to={"settings"}>
            <ListItemText primary={"Settings"} />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <button onClick={handleLogout}>
            <ListItemText primary={"Logout"} />
          </button>
        </ListItem>
      </List>
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className="flex items-center">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className="md:hidden rounded-md p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
