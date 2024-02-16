import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";

import BannerImage from "../../Assets/thali2.png";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div className="home-container" >
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" width={"600px"} />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Served Hot & Fresh
          </h1>
          <p className="primary-text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  BREAKFAST <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  LUNCH<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  DINNER
          </p>
          
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
