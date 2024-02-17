import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="work-section-wrapper" style={{padding : "0px 0px 0px 200px"}}>
      <div className="work-section-top">
        <p className="primary-subheading">Review</p>
        <h1 className="primary-heading" style={{color:"whitesmoke"}}>What They Are Saying</h1>
        <p className="primary-text" style={{color:"whitesmoke"}}>
        Love using the canteen app! It has completely transformed my dining experience on campus. The user-friendly interface makes it so easy to browse through the menu and place my order. 
        </p>
      </div>
      {/* <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div> */}
    </div>
  );
};

export default Review;
