import * as React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  Box,
  Drawer,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import "../components/MenuBar.css";

function MenuBar(props) {
  const [state, setState] = React.useState({
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
      <List>
        <div className="barlogo">
          <Avatar>H</Avatar>
        </div>
        <div className="bartext1">
          <Typography variant="h6" component="div">
            MonoLuck
          </Typography>
        </div>
        <div className="bartext2">
          <Typography variant="body2" component="div">
            Monosparta
          </Typography>
        </div>
        <ListItem disablePadding>
          <div className="barbutton1">
            <Link href="/registerPage" underline="none">
              <ListItemButton>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <Typography variant="subtitle2" style={{color: '#000000'}}>
                  鎖櫃登記
                </Typography>
              </ListItemButton>
            </Link>
          </div>
        </ListItem>
        <ListItem disablePadding>
          <div className="barbutton1">
            <Link href="/searchPage" underline="none">
              <ListItemButton >
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <Typography variant="subtitle2" style={{color: '#000000'}}>
                查詢登記
                </Typography>
              </ListItemButton>
            </Link>
          </div>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <AppBar class="bar">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <MenuIcon onClick={toggleDrawer(anchor, true)} />
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </IconButton>
        <Typography variant="h6">{props.name}</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default MenuBar;
