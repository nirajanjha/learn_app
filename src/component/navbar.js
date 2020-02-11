import React, { Component } from "react";
import Navitem from "./navitem";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Navitem item="All Courses"></Navitem>
          <Navitem item="Live Classes"></Navitem>
          <Navitem class="enroll" item="Enroll"></Navitem>
          <Navitem class="signin" item="Sign in &rarr;"></Navitem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
