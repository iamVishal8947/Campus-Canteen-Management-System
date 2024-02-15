//Not being used for now . Using Login Comp for login
//------------------------------------------------------------------------------------------------
import { backdropClasses } from "@mui/material";
import React from "react";
// import "./LoginForm.css"
import blurbg from '../../Assets/imgblurbg.jpg'

export default function ({ setOpenModal }) {

  
  
  const titleCloseBtn = () => ({
    display: "flex",
    justifyContent: "flex-end"
  });

  const loginformcss = () => ({
    width: "600px",
    position: "sticky",
    top: "0"
  });
  const modalContainerStyles = () => ({
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    zIndex: "99999"
  });
  const titleCloseBtnButton = () => ({
    backgroundColor: "transparent",
    border: "none",
    fontSize: "25px",
    cursor: "pointer"
  });

  const modalContainerBody = () => ({
    flex: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.7rem",
    textAlign: "center"
  });

  const modalContainerFooter = () => ({
    flex: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });

  const modalContainerFooterButton = () => ({
    width: "150px",
    height: "45px",
    margin: "10px",
    border: "none",
    backgroundColor: "cornflowerblue",
    color: "white",
    borderRadius: "8px",
    fontSize: "20px",
    cursor: "pointer"
  });

  const cancelBtn = () => ({
    backgroundColor: "crimson"
  });
  return (
    <div className="modalBackground" style={{modalContainerStyles}}>
      <div className="modalContainer"  style={{flex: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.7rem",
    textAlign: "center"}}>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="login-form" style={{width: "600px"}}>
        <form >{/* Add your login form fields here */}
                Username <input/> <br/>
                Password <input/> 
                <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </form>
        </div>
       
        <div className="footer">
          
        </div>
      </div>
    </div>
  );
}
//------------------------------------------------------------------------------------------------

