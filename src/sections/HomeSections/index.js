import React from "react";
import Banner from "./Banner";
import AppSection from "./AppSection";
import FeaturesSections from "./FeaturesSections";
import DownloadSection from "./DownloadSection";
import Footer from "../components/Footer";

const HomeSections = () => {
  return (
    <div>
      <Banner />
      {/* <AppSection /> */}
      <FeaturesSections />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default HomeSections;
