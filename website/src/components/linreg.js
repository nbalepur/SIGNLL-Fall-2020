import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Subheader from "./subheader.js";

import Chart from "chart.js";

import { Scatter } from "react-chartjs-2";

class LinReg extends Component {
  state = {
    points: [],
    scatterPlot: null,
  };

  componentDidMount() {
    let ctx = document.getElementById("linreg-scatter");
    let scatterPlot = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          {
            backgroundColor: "red",
            data: [],
            pointHoverBackgroundColor: "blue",
          },
        ],
      },
      options: {
        tooltips: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
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
      var xNew = scatterPlot.scales["x-axis-1"].getValueForPixel(clickPixel.x);
      var yNew = scatterPlot.scales["y-axis-1"].getValueForPixel(clickPixel.y);

      let points = scatterPlot.data.datasets[0].data;
      points.push({ x: xNew, y: yNew });
      scatterPlot.data.datasets[0].data = points;

      scatterPlot.update();
    }
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
            <canvas id="linreg-scatter"></canvas>
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
