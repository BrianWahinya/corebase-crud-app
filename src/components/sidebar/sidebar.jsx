import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

export default function Sidebar({ toggleDrawer, open }) {
  const navigate = useNavigate();
  const entities = [
    {
      id: "register",
      name: "Customer Register",
      link: "/customerregister",
      icon: <PeopleIcon />,
    },
    {
      id: "invoices",
      name: "Invoices",
      link: "/invoices",
      icon: <FileCopyIcon />,
    },
    {
      id: "journals",
      name: "Customer Journals",
      link: "/journals",
      icon: <NewspaperIcon />,
    },
    {
      id: "creditnotes",
      name: "Credit Notes",
      link: "/creditnotes",
      icon: <CreditScoreIcon />,
    },
  ];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {entities.map((entity) => (
          <ListItem key={entity.id} disablePadding>
            <ListItemButton onClick={() => navigate(entity.link)}>
              <ListItemIcon>{entity.icon}</ListItemIcon>
              <ListItemText primary={entity.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={open}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            sx={{
              [`& .MuiDrawer-paper`]: {
                marginTop: 8,
                height: "auto",
                boxSizing: "border-box",
              },
            }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
