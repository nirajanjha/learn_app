import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import logo from "../src/assets/logo.png";
// import icon from "./assets/icon.svg";
import Navbar from "./component/navbar";
import Top from "./component/top-section";
import Tab from "./component/tab";
import List from "./component/list";
import Card from "./component/card";
import Footer from "./component/footer";
// import $ from "jQuery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://dev-api.learnapp.co/webinars")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const list = items.data.map(item => (
        <Col sm="3">
          <Card
            src={item.image_url}
            category={item.category}
            name={item.title}
            date={item.date}
            button={item.mentor}
          ></Card>
        </Col>
      ));
      return (
        <div>
          <div className="front">
            <Container>
              <Row>
                <Col sm="4">
                  <img src={logo} alt="Logo" />;
                </Col>
                <Col sm="8">
                  <Navbar></Navbar>
                </Col>
              </Row>
              <Row>
                <Col sm="3"></Col>
                <Col sm="6">
                  <Top></Top>
                </Col>
                <Col sm="3"></Col>
              </Row>
            </Container>
          </div>
          <div>
            <Container>
              <Row>
                <Col>
                  <Tab></Tab>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Container>
              <Row>
                <Col>
                  <List></List>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="card-wrapper">
            <Container>
              <Row>
                <Col sm="1"></Col>
                <Col sm="11">
                  <Row>{list}</Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      );
    }
  }
}

export default App;
