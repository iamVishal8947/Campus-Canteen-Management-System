import React from "react";
// import Logo from "../../Assets/Logo.svg";
import Logo from "../../Assets/cms-high-resolution-logo-removebg.png";
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
      <div style={{marginTop:"10px"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <h3>अन्न हे पूर्ण ब्रह्म !</h3>  </div>
      <div className="footer-section-two">
        <div className="footer-section-columns" style={{color:"whitesmoke"}}>
          <span style={{color:"whitesmoke"}} >Help</span>
          <span style={{color:"whitesmoke"}}>Share</span>
          <span style={{color:"whitesmoke"}}>Carrers</span>
          <span style={{color:"whitesmoke"}}>Review</span>
        </div>
        <div className="footer-section-columns" style={{color:"whitesmoke"}}>
          <span style={{color:"whitesmoke"}}>244-5333-7783</span>
          <span style={{color:"whitesmoke"}}>hello@cms.com</span>
          <span style={{color:"whitesmoke"}}>press@cms.com</span>
          <span style={{color:"whitesmoke"}}>contact@cms.com</span>
        </div>
        <div className="footer-section-columns" style={{color:"whitesmoke"}}>
          <span style={{color:"whitesmoke"}}>Terms & Conditions</span>
          <span style={{color:"whitesmoke"}}>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
