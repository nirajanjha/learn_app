import React, { Component } from "react";
import candle from "../assets/candle.png";

class card extends Component {
  render() {
    return (
      <div className="card">
        <div className="image-wrapper">
          <img src={this.props.src} alt="image1" />
        </div>

        <p className="category">{this.props.category}</p>
        <h3>{this.props.name}</h3>
        <p className="date">{this.props.date}</p>
        <p className="button">{this.props.button}</p>
      </div>
    );
  }
}

card.defaultProps = {
  src: candle,
  button: "tapan"
};

export default card;
