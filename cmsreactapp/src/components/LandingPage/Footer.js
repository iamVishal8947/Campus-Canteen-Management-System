import React from "react";
// import Logo from "../../Assets/Logo.svg";
import Logo from "../../Assets/logo-no-background.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper" style={{padding : "0px 0px 30px 200px"}}>
      <div className="footer-section-one">
        <div className="footer-logo-container">
           <img src={Logo} alt="" />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; 2024
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Review</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@cms.com</span>
          <span>press@cms.com</span>
          <span>contact@cms.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
