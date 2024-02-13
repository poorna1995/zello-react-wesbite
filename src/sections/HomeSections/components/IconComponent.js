import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "10px",
    "& svg": {
      height: "50px",
      width: "50px",
    },
  },
}));

const IconComponent = ({ icon, invertIcon, url, styles }) => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);
  const mouseEnterHandler = () => {
    setIsHover(true);
  };
  const mouseLeaveHandler = () => {
    setIsHover(false);
  };
  return (
    <span
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{ cursor: "pointer" }}
      className={classes.root}
    >
      <a href={url} target="_blank">
        {isHover && invertIcon}
        {!isHover && icon}
      </a>
    </span>
  );
};

export default IconComponent;
