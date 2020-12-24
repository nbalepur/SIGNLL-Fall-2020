import React, { Component } from "react";

// Import the digit recogniser.
import { HandwrittenDigitRecogniser } from "handwritten-mathematics-recogniser/digit";

// Import the drawer.
import { Drawer } from "handwritten-mathematics-recogniser/drawer";

import { Container } from "react-bootstrap";

class Test extends Component {
  state = {
    drawer: "",
    canvas: "",
  };

  componentDidMount() {
    this.getDrawer();
  }

  getDrawer = () => {
    let canvas = document.querySelector("#canvas");
    this.setState({ canvas: canvas, drawer: new Drawer(canvas) });
  };

  getDigit = () => {
    let digit = HandwrittenDigitRecogniser.recogniseWithMetadata(
      this.state.canvas
    );
    console.log(digit);
  };

  clearCanvas = () => {
    this.state.drawer.clear();
  };

  render() {
    return (
      <Container>
        <h1>hi</h1>
        <canvas style={{ backgroundColor: "red" }} id="canvas">
          hey
        </canvas>
        <button onClick={this.getDigit}>recognize</button>
        <button onClick={this.clearCanvas}>clear</button>
      </Container>
    );
  }
}

export default Test;
