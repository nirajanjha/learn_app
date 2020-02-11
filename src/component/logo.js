import React, { Component } from "react";
import logo from "../assets/logo.png";

console.log(logo);

class Logo extends Component {
  render() {
    return <img src={logo} alt="Logo" />;
  }
}

export default Logo;
