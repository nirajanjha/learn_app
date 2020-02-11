import React, { Component } from "react";
import Navitem from "./navitem";

class Tab extends Component {
  render() {
    return (
      <div className="tab">
        <ul>
          <Navitem item="Upcomings"></Navitem>
          <Navitem class="recording" item="Recordings"></Navitem>
        </ul>
      </div>
    );
  }
}

export default Tab;
