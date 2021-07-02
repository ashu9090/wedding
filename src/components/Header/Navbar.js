import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

import img from "../../assets/images/7.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: "rgba(255,255,255,0.8)",
    color: "var(--primary)",
    borderBottom: "1px dashed var(--primary)",
  },
  Logo: {
    boxShadow: "none",
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "888",
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "180px",
      left: "0%",
      transform: "translateX(0%)",
    },
    "& img": {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        zIndex: "20",
        position: "relative",
      },
    },
  },
  leftNev: {
    float: "left",
    "& a": {
      color: "var(--primary)",
      textTransform: "uppercase",
      textDecoration: "none",
      marginRight: "20px",
    },
  },
  rightNev: {
    float: "right",
    "& a": {
      color: "var(--primary)",
      textTransform: "uppercase",
      textDecoration: "none",
      marginLeft: "20px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
  },
  sectionMobile: {
    display: "flex",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobNavbar: {
    "& div:nth-child(3)": {
      left: "0px !important",
      right: "0px !important",
      maxWidth: "100%",
      top: "50px !important",
      paddingTop: "10px",
      paddingLeft: "10px",
      paddingRight: "10px",
      zIndex: "4",
      "& a": {
        width: "100%",
        display: "block",
        color: "var(--primary)",
        textDecoration: "none",
        padding: "6px",
      },
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      class={classes.mobNavbar}
    >
      <Link to="/">link 1</Link>
      <Link to="/">link 2</Link>
      <Link to="/">link 3</Link>
      <Link to="/">link 4</Link>
      <Link to="/">link 5</Link>
      <Link to="/">link 6</Link>
    </Menu>
  );
  //!code
  return (
    <div className={classes.grow}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.Logo}>
            <img src={img} alt="logo" />
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.leftNev}>
              <Link to="/">link 1</Link>
              <Link to="/">link 2</Link>
              <Link to="/">link 3</Link>
            </div>
            <div className={classes.rightNev}>
              <Link to="/">link 4</Link>
              <Link to="/">link 5</Link>
              <Link to="/">link 6</Link>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Navbar;
