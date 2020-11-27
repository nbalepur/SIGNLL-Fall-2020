import React, { Component } from "react";

import { Container, Button } from "react-bootstrap";

import CanvasDraw from "react-canvas-draw";

import { predictNum } from "../backend/mnist_backend.js";

import "../styles.css";

class Canvas extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  getNumber = (data) => {
    if (
      data.lines === null ||
      data.lines === undefined ||
      data.lines.length === 0
    ) {
      alert("Please draw a valid number!");
      return;
    }

    let cleaned_data = predictNum(data.lines);
  };

  render() {
    return (
      <Container>
        <div class="row">
          <div class="col-lg-12">
            <h5>Draw your number below!</h5>
            <CanvasDraw
              ref={this.canvasRef}
              hideGrid={true}
              hideInterface={true}
              canvasWidth={384}
              canvasHeight={384}
              backgroundColor={" #71bceb"}
            />
          </div>
          <div class="col-md-3 canvas-buttons">
            <Button
              variant="warning"
              onClick={() => {
                if (
                  this.canvasRef.current !== null &&
                  this.canvasRef.current !== undefined
                ) {
                  this.canvasRef.current.undo();
                }
              }}
            >
              Undo
            </Button>{" "}
            <Button
              variant="danger"
              onClick={() => {
                if (
                  this.canvasRef.current !== null &&
                  this.canvasRef.current !== undefined
                ) {
                  this.canvasRef.current.clear();
                }
              }}
            >
              Clear
            </Button>{" "}
            <Button
              onClick={() => {
                if (
                  this.canvasRef.current !== null &&
                  this.canvasRef.current !== undefined
                ) {
                  this.getNumber(
                    JSON.parse(this.canvasRef.current.getSaveData())
                  );
                }
              }}
            >
              Predict
            </Button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default Canvas;
