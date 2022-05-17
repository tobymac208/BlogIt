import React from "react";
import user from '../Images/user.jpg';

const About = () => {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img
            src={user}
            alt="personal"
          />
        </div>
        <div className="content">
          <div className="header">Niklas Fernandez</div>
          <div className="description">
              Email: <a href="mailto:niklasfernandez97@gmail.com">niklasfernandez97@gmail.com</a>
          </div>
          <div className="description">Phone #: 555-123-1234</div>
        </div>
      </div>
    </div>
  );
};

export default About;
