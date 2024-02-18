import React from "react";
import Home from "./Home";
import About from "./About";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div style={{width:"85vw",marginLeft:"40px"}} >
      <section id="home-section">
        <Home />
      </section>

      <section id="about-section">
        <About />
      </section>

      <section id="review-section">
        <Review />
      </section>

      <section id="contact-section">
        <Contact />
        <Footer />
      </section>
    </div>
  );
}
