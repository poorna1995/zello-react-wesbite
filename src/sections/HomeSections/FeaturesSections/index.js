import React from "react";
import FeatureItem from "./FeatureItem";
import profile from "assets/Home/profile.png";
import send_pictures from "assets/Home/send_pictures.png";
import contacts from "assets/Home/contacts.png";
import widgets from "assets/Home/widgets.png";
import friends from "assets/Home/friends.png";
import { Typography } from "@mui/material";
import peach_dot from "assets/Home/peach_dot.png";
import green_dot from "assets/Home/green_dot.png";
import pink_dot from "assets/Home/pink_dot.png";
import { useTheme } from "@mui/styles";

const data = [
  {
    isLeft: true,
    image: profile,
    title: (
      <span>
        <span style={{ color: "#72DED8" }}>Capture</span> memories from your
        Camera or <span style={{ color: "#72DED8" }}>Select</span> one from your
        Gallery.
      </span>
    ),
    dot: peach_dot,
    dotStyle: {
      position: "absolute",
      right: "0",
      top: "50%",
      width: "40px",
      height: "80px",
    },
  },
  {
    isLeft: false,
    image: send_pictures,
    title: (
      <span>
        <span style={{ color: "#D1D511" }}>Send</span> pictures to multiple
        phone screens at the same time.
      </span>
    ),
  },
  {
    isLeft: true,
    image: contacts,
    title: (
      <span>
        <span style={{ color: "#FC8631" }}>Create</span> one or multiple Groups.
        Add & Invite all your contacts!
      </span>
    ),
    dot: green_dot,
    dotStyle: {
      position: "absolute",
      left: "0",
      top: "0",
      width: "40px",
      height: "80px",
    },
  },
  {
    isLeft: false,
    image: widgets,
    title: (
      <span>
        <span style={{ color: "#FF75B7" }}>Track</span> all your Groups and
        their details in a clean list view.
      </span>
    ),
  },
  {
    isLeft: true,
    image: friends,
    title: (
      <span>
        <span style={{ color: "#FAF580" }}>Find</span> all your shared pictures
        in a smooth timeline view.
      </span>
    ),
    dot: pink_dot,
    dotStyle: {
      position: "absolute",
      right: "0",
      bottom: "20%",
      width: "40px",
      height: "80px",
    },
  },
];

const FeaturesSections = () => {
  const theme = useTheme();
  return (
    <div id="features">
      <Typography
        variant="h2"
        sx={{
          fontSize: "52px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          [theme.breakpoints.down("md")]: {
            fontSize: "20px",
            marginTop: "120px",
          },
        }}
        mt={20}
        mb={{ md: 10 }}
      >
        Features
      </Typography>

      {data.map((item) => {
        return <FeatureItem data={item} />;
      })}
    </div>
  );
};

export default FeaturesSections;
