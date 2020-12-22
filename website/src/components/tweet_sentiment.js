import React, { Component } from "react";

import { predictSentiment } from "../backend/sentiment_backend.js";

import { Container, Jumbotron } from "react-bootstrap";
import { Doughnut, Bar } from "react-chartjs-2";

import FakeTweet from "fake-tweet";
import "fake-tweet/build/index.css";

import Subheader from "./subheader.js";

import "chartjs-plugin-deferred";

class TweetSentiment extends Component {
  state = {
    tweet: "",
    doughnutChart: null,
    barChart: null,
    sentiment: "positive",
    happyImageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_Icon_-_Blushed_large.png?v=1571606114",
    sadImageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_large.png?v=1571606037",
  };

  constructor(props) {
    super(props);
    this.jumbotronRef = React.createRef();
  }

  componentDidMount() {
    this.getSentiment();
  }

  getSentiment = () => {
    // initial cleaning
    var tweet = document.getElementById("sentiment-input").value.trim();
    tweet = tweet.replace(/\s\s+/g, " ");
    document.getElementById("sentiment-input").value = tweet;

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

    // create the fake tweet
    this.createTweet(tweet, predictInfo.sentiment.toLowerCase());

    // scroll animation
    if (this.jumbotronRef.current !== null) {
      this.jumbotronRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  formatTime = () => {
    var date = new Date().toUTCString();
    var dateSplit = date.split(" ");

    var time = dateSplit[4];
    var timeSplit = time.split(":");

    var timeZoneOffset = new Date().getTimezoneOffset() / 60;

    var hour = parseInt(timeSplit[0]) - timeZoneOffset;
    var am_pm = hour > 12 ? "PM" : "AM";
    hour -= 12 * (am_pm === "PM");

    var formatTime = hour + ":" + timeSplit[1] + " " + am_pm;
    var formatDate = dateSplit[2] + " " + dateSplit[1] + ", " + dateSplit[3];

    return formatTime + " · " + formatDate;
  };

  createTweet = (tweet, prediction) => {
    this.formatTime();
    const config = {
      user: {
        nickname: "signll_uiuc",
        name: "SIGNLL@UIUC",
        avatar:
          prediction === "positive"
            ? this.state.happyImageUrl
            : this.state.sadImageUrl,
        verified: true,
        locked: false,
      },
      display: "default",
      text: tweet,
      date: this.formatTime(),
      retweets: Math.floor(1000 * Math.random()),
      quotedTweets: Math.floor(1000 * Math.random()),
      likes: Math.floor(1000 * Math.random()),
    };
    this.setState({
      tweet: (
        <div class="row">
          <div class="col-md-12" align="center">
            <h4>Your Tweet:</h4>
            <FakeTweet config={config} />
          </div>
        </div>
      ),
    });
  };

  /**
   * Appropriately parses the wordInfo object
   * @param {Object} wordInfo object returned from backend
   */
  parseWordInfo = (wordInfo) => {
    // declare variables
    var words = [];
    var negCounts = [];
    var posCounts = [];

    for (var wordIndex = 0; wordIndex < wordInfo.length; wordIndex++) {
      // get current object
      const wordObj = wordInfo[wordIndex];

      // add to arrays
      words.push(wordObj.word);
      negCounts.push(wordObj.neg_count);
      posCounts.push(wordObj.pos_count);
    }

    // return values
    return {
      words: words,
      negCounts: negCounts,
      posCounts: posCounts,
    };
  };

  /**
   * Creates a bar chart
   * @param {Object} wordInfo object returned from backend
   */
  createBarChart = (wordInfo) => {
    // parse data
    let data = this.parseWordInfo(wordInfo);

    // set bar chart state
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
  };

  /**
   * Creates a pie chart
   * @param {double} pred prediction value
   */
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
            <div class="col-md-12" align="right">
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
        {this.state.tweet}
        <br></br>
        <br></br>
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
