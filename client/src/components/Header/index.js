import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  Typography,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";

import {
  adminRoutes,
  loggedRoutes,
  unLoggedRoutes,
} from "../../constants/Links";
import Logo from "../Logo";
import { ShoppingCart } from "../ShoppingCart";
import { useStyles } from "./Header.Style.js";
import { GlobalState } from "../../GlobalState";
import CommonBtn from "../Button";

export default function Header() {
  const globalState = useContext(GlobalState);
  const [isLoggedIn] = globalState.token;
  const [callback, setCallback] = globalState.callback;
  const [token] = globalState.userAPI.isLoggedIn;
  const [mobileView] = globalState.userAPI.isMobile;
  const [isAdmin] = globalState.userAPI.isAdmin;
  const { logout } = globalState.userAPI;
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    drawerOpen: false,
  });

  const { drawerOpen } = state;

  useEffect(() => {
    mobileRoutes();
    desktopRoutes();
  }, [isLoggedIn, token, isAdmin]);

  const displayDesktop = () => {
    return (
      <Toolbar container xs={12} className={toolbar}>
        {isAdmin ? (
          <Typography variant="h4" component="h4">
            ADMIN
          </Typography>
        ) : (
          <Logo />
        )}
        <div>{desktopRoutes()}</div>
      </Toolbar>
    );
  };

  const handleLogout = () => {
    localStorage.clear();
    logout();
    window.location.href = "/";
  };

  const addMobileLink = (label, href) => {
    if (label === "Logout") {
      return (
        <Link
          onClick={handleLogout}
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    } else {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    }
  };

  const addDesktopLink = (label, href) => {
    if (label === "Logout") {
      return (
        <CommonBtn
          onClick={handleLogout}
          color="secondary"
          variant="outlined"
          text="Logout"
          size="medium"
          style={{ height: "50px", alignSelf: "center" }}
        />
      );
    } else {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    }
  };

  const mobileRoutes = () => {
    console.log(isAdmin, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    if (isLoggedIn) {
      if (isAdmin) {
        return adminRoutes.map(({ label, href }) => {
          return addMobileLink(label, href);
        });
      }
      return loggedRoutes.map(({ label, href }) => {
        return addMobileLink(label, href);
      });
    }
    return unLoggedRoutes.map(({ label, href }) => {
      return addMobileLink(label, href);
    });
  };

  const desktopRoutes = () => {
    if (isLoggedIn) {
      if (isAdmin) {
        return adminRoutes.map(({ label, href }) => {
          return addDesktopLink(label, href);
        });
      }
      return loggedRoutes.map(({ label, href }) => {
        return addDesktopLink(label, href);
      });
    }
    return unLoggedRoutes.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <>
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{mobileRoutes()}</div>
          </Drawer>

          {isAdmin ? <h1>ADMIN</h1> : <Logo />}
        </Toolbar>
      </>
    );
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
        <ShoppingCart />
      </AppBar>
    </header>
  );
}
