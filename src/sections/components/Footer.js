import React from "react";
import { Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          textAlign: "center",
          width: "80%",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            color: "white",
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
            },
          }}
        >
          © {year} Zello. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
