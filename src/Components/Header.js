import React from "react";

const Header = (props) => {
  return (
    <div className="ui inverted vertical center aligned segment">
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <a className="item" href="/">Home</a>
          <a className="item">Projects</a>
          <div className="right item">
            <a className="ui inverted button">Log in</a>
            <a className="ui inverted button">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
