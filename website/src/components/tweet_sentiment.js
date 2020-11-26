import React, { Component } from "react";

import { predictSentiment } from "../backend/sentiment_backend.js";

import { Container, Jumbotron } from "react-bootstrap";
import { Doughnut, Bar } from "react-chartjs-2";

import Subheader from "./subheader.js";

import "chartjs-plugin-deferred";

class TweetSentiment extends Component {
  state = {
    tweet: "",
    doughnutChart: null,
    barChart: null,
    sentiment: "Positive",
  };

  constructor(props) {
    super(props);
    this.jumbotronRef = React.createRef();
  }

  componentDidMount() {
    this.getSentiment();
  }

  getSentiment = () => {
    //console.log(processTweet("My name is nishant and im cool"));
    var tweet = document.getElementById("sentiment-input").value.trim();
    tweet = tweet.replace(/\s\s+/g, " ");
    document.getElementById("sentiment-input").value = tweet;

    // sets the tweet state
    this.setState({ tweet: tweet });

    // checks the length of the tweet
    if (tweet.length === 0) {
      alert("Please enter a valid message");
      return;
    }

    // predicts the sentiment
    var predictInfo = predictSentiment(tweet);
    this.setState({ sentiment: predictInfo.sentiment.toLowerCase() });

    // create the doughnut chart
    this.createDoughnutChart(predictInfo.prediction);

    // create the bar chart
    this.createBarChart(predictInfo.word_info);

    // scroll animation
    if (this.jumbotronRef.current !== null) {
      this.jumbotronRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  parseWordInfo = (wordInfo) => {
    var words = [];
    var negCounts = [];
    var posCounts = [];

    for (var wordIndex = 0; wordIndex < wordInfo.length; wordIndex++) {
      const wordObj = wordInfo[wordIndex];
      words.push(wordObj.word);
      negCounts.push(wordObj.neg_count);
      posCounts.push(wordObj.pos_count);
    }

    return {
      words: words,
      negCounts: negCounts,
      posCounts: posCounts,
    };
  };

  createBarChart = (wordInfo) => {
    let data = this.parseWordInfo(wordInfo);

    this.setState({
      barChart: (
        <Bar
          data={{
            labels: data.words,
            datasets: [
              {
                label: "Negative Count",
                data: data.negCounts,
                backgroundColor: "#e3554b",
              },
              {
                label: "Positive Count",
                data: data.posCounts,
                backgroundColor: "#4b95db",
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Individual Word Sentiment Breakdown",
              fontSize: 25,
            },
            plugins: {
              deferred: { yOffset: "50%", delay: 500 },
            },
          }}
        />
      ),
    });
    //console.log(wordInfo);
  };

  createDoughnutChart = (pred) => {
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
          options={{
            legend: {
              onClick: null,
            },
            title: {
              display: true,
              text: "Probability Distribution of Sentiments",
              fontSize: 25,
            },
            plugins: {
              deferred: { yOffset: "50%", delay: 500 },
            },
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
              defaultValue="I am happy!"
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
        <Jumbotron ref={this.jumbotronRef}>
          <h4>
            Your message was determined to have{" "}
            <span
              style={{
                color:
                  this.state.sentiment === "positive" ? "#4b95db" : "#e3554b",
              }}
            >
              {this.state.sentiment}
            </span>{" "}
            sentiment
          </h4>
        </Jumbotron>
        <br></br>
        {this.state.doughnutChart}
        <br></br>
        <br></br>
        <br></br>
        {this.state.barChart}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default TweetSentiment;
