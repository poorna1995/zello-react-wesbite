import React from "react";
import { Typography, Box } from "@mui/material";
import widget from "assets/Home/widget.png";
import yelloDot from "assets/Home/yellow_dot.png";
import blueDot from "assets/Home/blue_dot.png";

const AppSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        position: "relative",
        // height: "90vh",
      }}
    >
      <img
        src={widget}
        alt="app screenshot"
        style={{
          height: "90vh",
          width: "23%",
          borderRadius: "24px",
          boxShadow:
            "33.076px 49.614px 66.152px rgba(68, 111, 196, 0.15), inset -1.6538px -8.26901px 16.538px rgba(147, 185, 221, 0.4), inset 8.26901px 1.6538px 16.538px #FFFFFF",
        }}
      />

      <img
        src={yelloDot}
        alt="peach dot"
        style={{
          position: "absolute",
          left: "0",
          top: "40%",
          height: "120px",
          width: "70px",
        }}
      />
      <img
        src={blueDot}
        alt="blue dot"
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          height: "80px",
          width: "50px",
        }}
      />
    </Box>
  );
};

export default AppSection;
