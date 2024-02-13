import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

const FeatureItemLeft = ({ data }) => {
  const theme = useTheme();
  const { isLeft, image, title, dot, dotStyle } = data;

  return (
    <Box
      sx={{
        padding: "0 10%",
        marginTop: "60px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
          padding: "0",
          "& .dotCircle": {
            width: "30px !important",
            height: "60px !important",
          },
        },
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: !isLeft && "row-reverse",
          justifyContent: "space-around",
          width: "85%",
          [theme.breakpoints.down("md")]: {
            width: "80%",
            display: "block",
            textAlign: "center",
            "& img": {
              width: "100% !important",
              height: "auto !important",
              marginBottom: "20px",
            },
          },
        }}
      >
        <img
          src={image}
          alt="feature image"
          style={{
            width: "400px",
            height: "600px",
            objectFit: "cover",
            borderRadius: "30px",
          }}
        />
        <Typography
          sx={{
            fontSize: "46px",
            color: "white",
            width: "60%",
            fontWeight: "700",
            [theme.breakpoints.down("md")]: {
              fontSize: "20px",
              width: "100%",
              textAlign: "left",
            },
          }}
          ml={{ md: 5 }}
          p={{ md: 2 }}
        >
          {title}
        </Typography>
      </Box>
      {dot && (
        <img src={dot} alt="dot" style={dotStyle} className="dotCircle" />
      )}
    </Box>
  );
};

export default FeatureItemLeft;
