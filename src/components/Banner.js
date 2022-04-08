import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Jehona Shabani",
    text:
      "Web Developer from Kosova ",
    image: "/image/me2.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaGithub className="headerIcon" />
                  </li>
                  <li>
                    <FaLinkedin className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="me" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;

