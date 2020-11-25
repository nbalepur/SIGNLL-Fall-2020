import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Projects from "../components/projects.js";

import Logo from "../images/logo.png";
import "../styles.css";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {};
  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <h2>
          About <span style={{ color: "#2185c5" }}>SIGNLL@UIUC</span>
        </h2>
        <hr></hr>
        <br></br>
        <div class="row">
          <div class="col col-lg-3">
            <img
              src={Logo}
              alt="logo"
              style={{ width: 250, height: 250 }}
            ></img>
          </div>
          <div class="col col-lg-9">
            <h4>
              <span style={{ color: "#2185c5" }}>SIGNLL@UIUC</span> is the
              special interest group for natural language learning at the
              University of Illinois at Urbana-Champaign, and is one of the many
              subgroups of ACM
            </h4>
            <br></br>
            <h4>
              This website contains many of the projects that we've worked on
              throughout different semesters, including notebooks, slides, and
              demos to give a taste of natural language processing
            </h4>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h2>Projects</h2>
        <hr></hr>
        <Projects setPage={this.props.setPage} />
      </Container>
    );
  }
}

export default Home;
