import React from "react";

const Header = (props) => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <a className="active item">Home</a>
          <a className="item">Work</a>
          <a href="/add" className="item">Careers</a>
          <div className="right item">
            <a className="ui inverted button">Log in</a>
            <a className="ui inverted button">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="ui text container">
        <h1 className="ui inverted header">BlogIt</h1>
        <h2>Where projects meet ideas.</h2>
      </div>
    </div>
  );
};

export default Header;
