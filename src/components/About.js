
import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Learn about me more",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Jehona Shabani" },
    { id: 2, title: "Email:", text: "jjehonashabani@gmail.com" },
    { id: 3, title: "Phone:", text: "+1 023 454 345" },
    { id: 4, title: "Linkedin", text: "Jehona Shabani" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/image/another2.png" alt="me" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              Hi, I am Jehona Shabani and this is my first portfolio , hope you like it.
              </div>
              <div className="about__info-p2">
              I have two choices in life.One is to be happy ,the other is to be unhappy.From this day forth , i say "YES" to the beckoning of my Soul's voice-nudging, guiding and drecting me to my highest purpose I exist for a special reason, I cannot fail.
              I know that failure is success,waiting to be reveaked.On a soul level, form where i create my life, there is only successful purpose.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;