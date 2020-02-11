import React, { Component } from "react";
import icon from "../assets/icon.svg";
import live from "../assets/live.svg";
class Navbar extends Component {
  render() {
    return (
      <div className="top">
        <h1>Live Classes Taught By Practioners</h1>
        <div className="line">
          <img className="icon" src={live} alt="Logo" />
          <p>get your questions answered realtime</p>
          <img className="icon" src={icon} alt="Logo" />
          <p>Recording Available for 5 days</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
