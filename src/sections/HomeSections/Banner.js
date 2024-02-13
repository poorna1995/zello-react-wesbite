import React from "react";
import { Typography, Box } from "@mui/material";
import googleImage from "assets/Home/google_play.png";
import bannerBg from "assets/Home/Banner-bg.png";
import { useTheme } from "@mui/styles";
import { data } from "constants/data";
const Banner = () => {
  const theme = useTheme();

  const navigateAppHandler = () => {
    window.location.href = data.APP_URL;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        marginBottom: "20px",
        background: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
        [theme.breakpoints.down("md")]: {
          height: "50vh",
          marginTop: "120px",
          marginBottom: "0",
        },
        // background:
        //   "linear-gradient(180deg, #010912 0%, rgba(1, 9, 18, 0) 100%)",
        // backdropFilter: "blur(16px)",
      }}
    >
      <Box
        sx={{
          width: "60%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: "64px",
            fontWeight: "900",
            textAlign: "center",
            lineHeight: "1.3",
            [theme.breakpoints.down("md")]: {
              fontSize: "26px",
              lineHeight: "46px",
            },
          }}
          mb={1}
        >
          Share Every Moment <br /> Faster With Widgets!
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: "white",
              width: "70%",
              textAlign: "center",
              opacity: "0.8",
              fontWeight: "500",
              [theme.breakpoints.down("md")]: {
                fontSize: "12px",
              },
            }}
          >
            Turn your Homescreens into a fun chatroom full of albums. Send &
            receive instant photo widgets to never miss out on a good thing!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "40px",
            [theme.breakpoints.down("md")]: {
              "& img": {
                width: "130px",
                height: "38px",
              },
            },
          }}
        >
          <img
            src={googleImage}
            alt="play store"
            style={{ margin: "0 auto", cursor: "pointer" }}
            onClick={navigateAppHandler}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
