import React, { Component } from "react";

import Subheader from "./subheader.js";
import Canvas from "./canvas.js";

import { Container } from "react-bootstrap";

class HandwrittenDigit extends Component {
  state = {};

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
        <br></br>
        <Canvas />
      </Container>
    );
  }
}

export default HandwrittenDigit;
