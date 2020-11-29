import React, { Component } from "react";

import Subheader from "./subheader.js";
import Canvas from "./canvas.js";

import { Container } from "react-bootstrap";

class HandwrittenDigit extends Component {
  state = {
    barGraph: null,
  };

  setBarGraph = (graph) => {
    this.setState({ barGraph: graph });
  };

  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <Subheader
          title={this.props.title}
          titleKey={this.props.titleKey}
          subtitle={this.props.subtitle}
          badges={this.props.badges}
        />
        <br></br>
        <h5>
          <b>Note: this page is still heavily a work in progress</b>
        </h5>
        <br></br>
        <br></br>
        <Canvas />
      </Container>
    );
  }
}

export default HandwrittenDigit;
