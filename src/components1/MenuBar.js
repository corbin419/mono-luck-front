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
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

function MenuBar(props) {
  const MenuBarTitleMap = [
    { path: "/", title: "首頁" },
    { path: "/RegisterPage", title: "鎖櫃登記" },
    { path: "/SearchPage", title: "查詢登記" },
    { path: "/RegisterFinishPage", title: "登記成功" },
    { path: "/SearchPageWait", title: "查詢登記" },
  ];
  let location = useLocation();
  let Menutitle;
  MenuBarTitleMap.forEach((key, value) => {
    if (key.path === location.pathname) {
      Menutitle = key.title;
    }
  });

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
  const StyledList = styled(List)({
    // hover states
    "& .MuiListItemButton-root:hover": {
      backgroundColor: "#E1F4FD",
      "&, & .Typography-root": {
        color: "#02A2EE",
      },
    },
  });
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
            <Link
              href="/RegisterPage"
              underline="none"
              style={{ color: "#000000" }}
            >
              <StyledList
                sx={{
                  "& .MuiListItemButton-root:hover": {
                    "&, & .Typography-root": {
                      color: "#02A2EE",
                    },
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <Typography variant="subtitle2">鎖櫃登記</Typography>
                </ListItemButton>
              </StyledList>
            </Link>
          </div>
        </ListItem>
        <ListItem disablePadding>
          <div className="barbutton1">
            <Link
              href="/SearchPage"
              underline="none"
              style={{ color: "#000000" }}
            >
              <StyledList
                sx={{
                  "& .MuiListItemButton-root:hover": {
                    "&, & .Typography-root": {
                      color: "#02A2EE",
                    },
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <Typography variant="subtitle2">查詢登記</Typography>
                </ListItemButton>
              </StyledList>
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
        <Typography variant="h6">{Menutitle}</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default MenuBar;
