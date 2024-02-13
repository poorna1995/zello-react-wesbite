import React from "react";
import HomeSections from "sections/HomeSections";
import HomeLayout from "layouts/HomeLayout";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <HomeLayout title="Zello - Photo Widget | Homepage">
      <Box sx={{ marginTop: "80px" }}>
        <HomeSections />
      </Box>
    </HomeLayout>
  );
};

export default Home;
