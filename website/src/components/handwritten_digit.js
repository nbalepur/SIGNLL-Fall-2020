import React, { Component } from "react";

import { Container, Button, Jumbotron } from "react-bootstrap";

import { HandwrittenDigitRecogniser as mnist } from "handwritten-mathematics-recogniser/digit";
import { Drawer } from "handwritten-mathematics-recogniser/drawer";

import { Bar } from "react-chartjs-2";

import Subheader from "./subheader.js";

import "../styles.css";

class HandwrittenDigit extends Component {
  state = {
    drawer: null,
    canvas: null,
    barGraph: null,
  };

  componentDidMount() {
    let canvas = document.querySelector("#mnist-canvas");
    let drawer = new Drawer(canvas);
    drawer.feedbackContext.lineWidth = 10;

    this.setState({ canvas: canvas, drawer: drawer });
  }

  predictNumber = () => {
    let digitData = this.parseData(
      mnist.recogniseWithMetadata(this.state.canvas)
    );

    let prediction = this.getPrediction(digitData);
    this.setState({ number: prediction });

    let barGraph = (
      <Bar
        width={800}
        height={300}
        data={{
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          datasets: [
            {
              label: "Probability",
              data: digitData,
              backgroundColor: this.createBackgroundColor(prediction),
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
  };

  parseData = (data) => {
    let arr = Array(10);

    for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
      let prob = data[dataIndex].probability;
      let recognition = data[dataIndex].recognition;

      arr[recognition] = prob;
    }

    return arr;
  };

  getPrediction = (data) => {
    let maxDigit = 0;

    for (let digit = 1; digit < data.length; digit++) {
      if (data[digit] > data[maxDigit]) {
        maxDigit = digit;
      }
    }

    return maxDigit;
  };

  createBackgroundColor = (number) => {
    let arr = new Array(10).fill("#e3554b");
    arr[number] = "#4b95db";
    return arr;
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
        <br></br>
        <div class="row">
          <div class="col-lg-6">
            <h5>Draw your number below!</h5>
            <canvas
              id="mnist-canvas"
              width={392}
              height={392}
              style={{
                backgroundColor: "#71bceb",
              }}
            ></canvas>
            <br></br>
          </div>
          <div class="col-lg-6">{this.state.barGraph}</div>
          <div class="col-md-6">
            <Button
              variant="danger"
              onClick={() => {
                this.state.drawer.clear();
              }}
            >
              Clear
            </Button>{" "}
            <Button onClick={this.predictNumber}>Predict</Button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default HandwrittenDigit;
