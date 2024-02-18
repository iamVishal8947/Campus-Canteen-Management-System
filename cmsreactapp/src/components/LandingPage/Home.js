import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";

import BannerImage from "../../Assets/thali2.png";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div className="home-container" >
      {/* style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#fff' }} */}
      <div >
      <Navbar />
      </div>
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" width={"600px"} />
        </div>
        <div className="home-text-section" style={{color:"whitesmoke"}}>
          <h1 className="primary-heading" style={{color:"whitesmoke"}}>
            Your Favourite Food Served Hot & Fresh
          </h1>
          <p className="primary-text" style={{color:"whitesmoke"}}>
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
