import React, { Component } from "react";
// import { Link } from "react-router-dom";
class Navitem extends Component {
  render() {
    return <li className={this.props.class}>{this.props.item}</li>;
  }
}

export default Navitem;
