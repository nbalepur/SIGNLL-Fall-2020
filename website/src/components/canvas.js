import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import CanvasDraw from "react-canvas-draw";
import { predictNum } from "../backend/mnist_backend.js";
import { Bar } from "react-chartjs-2";

import { initial_state } from "../backend/storage/mnist_storage.js";

import "../styles.css";

class Canvas extends Component {
  state = { barGraph: null };

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    if (this.canvasRef.current !== null) {
      this.canvasRef.current.loadSaveData(JSON.stringify(initial_state));
      this.getNumber(initial_state);
    }
  }

  createBackgroundColors = (data) => {
    let maxIndex = 0;
    for (var num = 1; num < data.length; num++) {
      if (data[maxIndex] < data[num]) {
        maxIndex = num;
      }
    }

    let arr = new Array(10).fill("#e3554b");
    arr[maxIndex] = "#4b95db";

    return arr;
  };

  getNumber = async (data) => {
    if (
      data.lines === null ||
      data.lines === undefined ||
      data.lines.length === 0
    ) {
      alert("Please draw a valid number!");
      return;
    }

    predictNum(data.lines).then((arr) => {
      let barGraph = (
        <Bar
          width={800}
          height={300}
          data={{
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            datasets: [
              {
                label: "Probabilities",
                data: arr[0],
                backgroundColor: this.createBackgroundColors(arr[0]),
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Individual Number Probability",
              fontSize: 16,
            },
          }}
        />
      );

      this.setState({ barGraph: barGraph });
    });
  };

  render() {
    return (
      <Container>
        <div class="row">
          <div class="col-lg-6">
            <h5>Draw your number below!</h5>
            <CanvasDraw
              ref={this.canvasRef}
              hideGrid={true}
              hideInterface={true}
              canvasWidth={392}
              canvasHeight={392}
              brushRadius={10}
              backgroundColor={"#71bceb"}
            />
          </div>
          <div class="col-lg-6">{this.state.barGraph}</div>
          <div class="col-md-6 canvas-buttons">
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
