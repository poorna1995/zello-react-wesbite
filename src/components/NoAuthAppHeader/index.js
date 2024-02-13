import {
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
  Button,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@mui/styles";
import logo from "assets/Home/zello_logo.png";
import { data } from "constants/data";
const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "80px",
    paddingTop: "8px",
    [theme.breakpoints.down("sm")]: {
      height: "72px",
    },

    boxShadow: " 0px 0px 3px rgba(0, 0, 0, 0.25) !important",

    webkitBackdropFilter: "saturate(200%) blur(20px)",
    backgroundColor: "transparent !important",
    background: "linear-gradient(180deg, #010912 0%, rgba(1, 9, 18, 0) 100%)",
    backdropFilter: "blur(16px)",
  },
  // appBarTransparent: {
  //   background: "#c5313100 !important",
  //   webkitBackdropFilter: "saturate(200%) blur(20px)",
  //   backdropFilter: "saturate(200%) blur(10px)",
  // },

  navigation: {
    display: "flex !important",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  icon: {
    // background: "rgba(243, 243, 243, 1)",
    marginLeft: theme.spacing(1),
  },
  explore: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  grow: {
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  hideOnMobileNavigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: {
    width: "120px",
    height: "60px",
    // marginLeft: "-24px",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      width: "70px",
      height: "20px",
    },
  },
  viewMore: {
    color: theme.palette.primary.main,
  },
  navLink: {
    marginRight: "50px",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      marginRight: "20px",
    },
  },
}));

const NoAuthAppHeader = ({ isAdmin, height, position }) => {
  // const [navBackground, setNavBackground] = useState("appBarSolid");
  const theme = useTheme();
  const mobileView = theme.breakpoints.down("md");
  const matches = useMediaQuery(mobileView);
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const nagivateFeatures = () => {
    // const anchor = document.querySelector("#features");
    // anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    var element = document.getElementById("features");
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const navigateAppHandler = () => {
    window.location.href = data.APP_URL;
  };

  return (
    <div className={classes.root}>
      <AppBar
        className={`${classes.appbar}`}
        position="fixed"
        style={{ height: height, position: position }}
        elevation={0}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box className={classes.navigation}>
            <>
              {" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to={`/`}>
                  <img src={logo} alt="Logo" className={classes.logo} />
                </Link>
              </div>
            </>

            <div className={classes.grow} />

            <div>
              <Link
                to="#"
                className={classes.navLink}
                onClick={nagivateFeatures}
              >
                Features
              </Link>

              <Button
                sx={{
                  borderRadius: "5px",
                  boxShadow:
                    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 72px rgba(153, 67, 243, 0.32)",
                  background: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  [theme.breakpoints.down("md")]: {
                    padding: "7px 8px",
                    fontSize: "12px",
                  },
                }}
                onClick={navigateAppHandler}
              >
                Download App
              </Button>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NoAuthAppHeader;
