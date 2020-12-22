import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Subheader from "./subheader.js";

class WordUnscramble extends Component {
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
      </Container>
    );
  }
}

export default WordUnscramble;
