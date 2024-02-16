import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/PohePng_1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  
  return (
    <div className="about-section-container" >
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container" style={{color:"whitesmoke"}} >
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading" style={{color:"whitesmoke"}}>
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text" style={{color:"whitesmoke"}}>
        Welcome to our canteen app, your one-stop solution for all your culinary needs on campus! Whether you're craving a hearty meal, a quick snack, or a refreshing beverage, our app has you covered
        </p>
        <p className="primary-text" style={{color:"whitesmoke"}}>
        Browse through our diverse menu featuring a wide range of delicious options, from comforting classics to innovative specialties
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" style={{color:"whitesmoke"}}>Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
