import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const Contact = () => {
  return (
    <>  <div className="icona"><a href="C:\Users\Jehona\Desktop\react-protfolio\CV-Jehona Shabani" download>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          CV-Resume
      </a>
          <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Hire Me
          </a>
        </div>
              <div className="container">
                  <div className="contactSection">
                      <div className="row justifyConter">
                          <div className="col-6">
                              <div className="contactSection-logo">
                                  <img src="/image/logo1.png" alt="" />
                              </div>
                              <p>
                                  Jehona Shabani,Prill,2022
                              </p>
                              <ul className="contactCircles">
                                  <li>
                                      <FaFacebookF className="contactIcon" />
                                  </li>
                                  <li>
                                      <FaGithub className="contactIcon" />
                                  </li>
                                  <li>
                                      <FaLinkedin className="contactIcon" />
                                  </li>
                                  <li>
                                      <FaInstagram className="contactIcon" />
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
        </>
  );
};

export default Contact;