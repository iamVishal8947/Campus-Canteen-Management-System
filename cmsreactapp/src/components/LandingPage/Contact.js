import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" style={{padding : "0px 0px 0px 200px"}}>
      <h1 className="primary-heading" style={{color:"whitesmoke"}}>Have Question In Mind?</h1>
      <h1 className="primary-heading" style={{color:"whitesmoke"}}>Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
