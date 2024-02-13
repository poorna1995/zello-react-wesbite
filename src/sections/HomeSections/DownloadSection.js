import React from "react";
import { Typography, Box } from "@mui/material";
import googleImage from "assets/Home/google_play.png";
import { ReactComponent as FbInvert } from "assets/Home/fb.svg";
import { ReactComponent as Fb } from "assets/Home/fb-invert.svg";
import { ReactComponent as InstaInvert } from "assets/Home/insta.svg";
import { ReactComponent as Insta } from "assets/Home/insta-invert.svg";
import IconComponent from "./components/IconComponent";
import { useTheme } from "@mui/styles";
import { data } from "constants/data";

const DownloadSection = () => {
  const theme = useTheme();
  const navigateAppHandler = () => {
    window.location.href = data.APP_URL;
  };

  return (
    <Box mb={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        mt={10}
      >
        <Box
          sx={{
            width: "40%",
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
              width: "90%",
              "& img": {
                width: "130px",
                height: "38px",
              },
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "64px",
              color: "white",
              fontWeight: "700",
              [theme.breakpoints.down("md")]: {
                fontSize: "32px",
              },
            }}
            mb={2}
          >
            Download the app to get started
          </Typography>
          <img
            src={googleImage}
            alt="play store"
            style={{ margin: "0 auto", cursor: "pointer" }}
            onClick={navigateAppHandler}
          />

          <Typography sx={{ fontSize: "22px", color: "white" }} mt={7} mb={3}>
            We are in Social ❤️
          </Typography>

          <div>
            <IconComponent
              icon={<Fb />}
              invertIcon={<FbInvert />}
              url={"https://www.facebook.com/zelloapplive"}
            />
            <IconComponent
              icon={<Insta />}
              invertIcon={<InstaInvert />}
              url={"https://www.instagram.com/zello.live/"}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadSection;
