import React, { Component } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <p>Copyright@Learnapp</p>
        </Container>
      </div>
    );
  }
}

export default Footer;
