import React, { Component } from "react";

import { predictSentiment } from "../backend/sentiment_backend.js";

import { Container } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";

import Subheader from "./subheader.js";

class TweetSentiment extends Component {
  state = {
    doughnutChart: null,
  };

  getSentiment = () => {
    //console.log(processTweet("My name is nishant and im cool"));
    var tweet = document.getElementById("sentiment-input").value;
    var predictInfo = predictSentiment(tweet);
    console.log(predictInfo);
    this.createDougnutChart(predictInfo.prediction);
  };

  createDougnutChart = (pred) => {
    this.setState({
      doughnutChart: (
        <Doughnut
          data={{
            datasets: [
              {
                data: [pred, 1 - pred],
                backgroundColor: ["#4b95db", "#e3554b"],
              },
            ],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: ["Positive Sentiment", "Negative Sentiment"],
          }}
        />
      ),
    });
  };

  render() {
    return (
      <Container>
        <div>
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
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Type your message below!
            </label>
            <textarea
              class="form-control"
              id="sentiment-input"
              rows="3"
            ></textarea>
          </div>
          <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.getSentiment}
              >
                Predict Sentiment
              </button>
            </div>
          </div>
        </div>
        <br></br>
        {this.state.doughnutChart !== null && this.state.doughnutChart}
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default TweetSentiment;
