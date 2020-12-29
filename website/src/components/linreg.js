import React, { Component } from "react";

import { Container, Jumbotron } from "react-bootstrap";

import Subheader from "./subheader.js";

import Chart from "chart.js";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "../styles.css";

import { linreg } from "../backend/regression_backend.js";

import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

class LinReg extends Component {
  state = {
    points: [],
    fittedLines: [],
    scatterPlot: null,
    degrees: 0,
    maxDegrees: 5,
    equation: "y = \\theta_0",
    allThetas: [],
  };

  componentDidMount() {
    let ctx = document.getElementById("linreg-scatter");
    let scatterPlot = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            showLine: false,
            backgroundColor: "#71bceb",
            data: [],
            pointHoverBackgroundColor: "#2185c5",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Linear Regression Plot",
          fontSize: 25,
        },
        tooltips: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              type: "linear",
              display: true,
              ticks: {
                min: -10,
                max: 10,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                min: -10,
                max: 10,
              },
            },
          ],
        },
        onClick: (ev) => {
          this.updatePoint(ev);
        },
      },
    });

    this.setState({ scatterPlot: scatterPlot });
  }

  updatePoint = (ev) => {
    let scatterPlot = this.state.scatterPlot;

    let element = scatterPlot.getElementAtEvent(ev);
    if (element.length === 0) {
      this.addPoint(ev, scatterPlot);
    } else {
      this.deletePoint(element[0], scatterPlot);
    }
  };

  deletePoint = (pointToDelete, scatterPlot) => {
    let deleteIndex = pointToDelete._index;

    let points = scatterPlot.data.datasets[0].data;
    points.splice(deleteIndex, 1);

    scatterPlot.data.datasets[0].data = points;
    scatterPlot.update();
  };

  addPoint = (ev, scatterPlot) => {
    const { left, right, top, bottom } = scatterPlot.chartArea;
    if (
      ev.offsetX > left &&
      ev.offsetX < right &&
      ev.offsetY > top &&
      ev.offsetY < bottom
    ) {
      const clickPixel = Chart.helpers.getRelativePosition(ev, scatterPlot);

      var xNew = scatterPlot.scales["x-axis-0"].getValueForPixel(clickPixel.x);
      var yNew = scatterPlot.scales["y-axis-0"].getValueForPixel(clickPixel.y);

      let points = scatterPlot.data.datasets[0].data;
      points.push({ x: xNew, y: yNew });
      scatterPlot.data.datasets[0].data = points;

      scatterPlot.update();
    }
  };

  clearPoints = () => {
    let scatterPlot = this.state.scatterPlot;
    scatterPlot.data.datasets[0].data = [];
    if (scatterPlot.data.datasets.length === 2) {
      scatterPlot.data.datasets[1].data = [];
    }

    this.setState({ fittedLines: [] });
    this.setState({ allThetas: [] });

    this.updateEquation(this.state.degrees);

    scatterPlot.update();
  };

  fitLine = () => {
    let scatterPlot = this.state.scatterPlot;

    let fittedLines = [];
    let allThetas = [];

    if (scatterPlot.data.datasets[0].data.length === 0) {
      return;
    }

    for (let deg = 0; deg <= this.state.maxDegrees; deg++) {
      let data = linreg(scatterPlot.data.datasets[0].data, deg);
      let x = data.x._data;
      let y = data.y._data;

      allThetas.push(data.thetas);

      let newPoints = [];
      for (let p = 0; p < 200; p++) {
        newPoints.push({ x: x[p], y: y[p][0] });
      }

      fittedLines.push(newPoints);
    }

    this.setState({ fittedLines: fittedLines });
    this.setState({ allThetas: allThetas });

    this.updateFittedLine(this.state.degrees, fittedLines);

    this.updateEquation(this.state.degrees, allThetas);
  };

  updateFittedLine = (deg, fittedLines) => {
    if (fittedLines === null) {
      return;
    }

    let scatterPlot = this.state.scatterPlot;

    if (scatterPlot.data.datasets.length === 1) {
      scatterPlot.data.datasets.push({
        data: fittedLines[deg],
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        borderColor: "#92ad94",
        backgroundColor: "transparent",
        showLine: true,
      });
    } else {
      scatterPlot.data.datasets[1] = {
        data: fittedLines[deg],
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        borderColor: "#92ad94",
        backgroundColor: "transparent",
        showLine: true,
      };
    }

    scatterPlot.update();
  };

  updateEquation = (deg, thetas) => {
    let equation = "y = ";

    if (thetas === null || thetas === undefined || thetas.length === 0) {
      for (let d = deg; d >= 1; d--) {
        if (d !== 1) {
          equation += "\\theta_{" + d + "}x^{" + d + "} + ";
        } else {
          equation += "\\theta_{" + d + "}x + ";
        }
      }

      equation += "\\theta_0";
    } else {
      let slopes = thetas[deg]._data;
      let absNext = false;

      for (let d = deg; d >= 1; d--) {
        let slope = absNext
          ? Math.abs(slopes[d][0].toFixed(2))
          : slopes[d][0].toFixed(2);

        let sign = slopes[d - 1][0] >= 0 ? "+" : "-";
        absNext = slopes[d - 1][0] < 0;

        if (d !== 1) {
          equation += slope + "x^{" + d + "} " + sign + " ";
        } else {
          equation += slope + "x " + sign + " ";
        }
      }

      equation += absNext
        ? Math.abs(slopes[0][0].toFixed(2))
        : slopes[0][0].toFixed(2);
    }

    this.setState({ equation: equation });
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
          <div class="col-xl-12" align="center">
            <div class="col-lg-6">
              <h4 style={{ fontSize: 25 }}>
                Degrees:{" "}
                <span style={{ color: "#2185c5" }}>{this.state.degrees}</span>
              </h4>
              <Slider
                min={0}
                max={this.state.maxDegrees}
                defaultValue={0}
                onChange={(value) => {
                  this.setState({ degrees: value });
                  this.updateFittedLine(value, this.state.fittedLines);
                  this.updateEquation(value, this.state.allThetas);
                }}
                trackStyle={[{ backgroundColor: "#2185c5" }]}
              />
              <br></br>
            </div>
          </div>
          <div class="col-xl-12" align="center">
            <canvas id="linreg-scatter"></canvas>
            <br></br>
          </div>
          <div class="col-lg-12" align="right">
            <button
              type="button"
              class="btn btn-danger"
              onClick={this.clearPoints}
            >
              Clear
            </button>{" "}
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.fitLine}
            >
              Fit Lines
            </button>
          </div>

          <div class="col-lg-12" align="center">
            <br></br>
            <div class="col-lg-12" align="center">
              {" "}
              <h4>Your Equation:</h4>
            </div>
            <Jumbotron>
              <h2>
                <InlineMath math={this.state.equation} />
              </h2>
            </Jumbotron>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default LinReg;
