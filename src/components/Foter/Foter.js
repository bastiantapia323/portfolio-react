import React from "react";
import "./Footer.css";
import "./../Info/Info.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Web developer</h1>
        <p>Based in Santiago</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Bussines Development</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/bastian-miguel-angel-tapia-pando-753182233/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://github.com/bastiantapia323" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;