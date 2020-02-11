import React, { Component } from "react";
import Navitem from "./navitem";

class Tab extends Component {
  render() {
    return (
      <div className="list">
        <ul>
          <Navitem class="all" item="All"></Navitem>
          <Navitem item="Investing"></Navitem>
          <Navitem item="Trading"></Navitem>
          <p>Register all &rarr;</p>
        </ul>
      </div>
    );
  }
}

export default Tab;
