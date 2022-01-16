import React from "react";

const Header = (props) => {
  return (
    <div className="ui inverted vertical center aligned segment">
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <a className="item header">BlogIt</a>
          <a className="item" href="/">Home</a>
          <a className="item"  href="/projects">Projects</a>
          <a className="item" href="/about">About</a>
          <div className="right item">
            <a className="ui inverted button" href="/login">Log in</a>
            <a className="ui inverted button" href="/sign-up">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
