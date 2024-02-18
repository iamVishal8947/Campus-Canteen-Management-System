/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import xmsLogo from "../../Assets/logo-no-background.png";
import Logo from '../../Assets/cms-high-resolution-logo-removebg.png'
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LoginForm from "./LoginForm";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Review",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleBackdropClick = () => {
    setShowLoginForm(false);
  };

  const handleLoginSubmit = () => {
    // Add your login logic here
  };

  return (
    <div>
    <nav style={{display:'flex', alignItems:'center',  justifyContent:'space-between', minHeight:'90px'}}>
      <div className="nav-logo-container">
        <img src={Logo} style={{height : "90px", width: "140px"}} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home-section" style={{ color: '#fd7e14' }}>Home</a>
        <a href="#about-section">About</a>
        <a href="#review-section">Reviews</a>
        <a href="#contact-section">Contact</a>
         <Link to="/LoginComp"> <strong>Login</strong> </Link>   
        
       </div>

    </nav>
   
    </div>
  );
};

export default Navbar;
