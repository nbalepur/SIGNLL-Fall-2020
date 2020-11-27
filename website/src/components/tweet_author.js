import React, { Component } from "react";

import { Container, Jumbotron } from "react-bootstrap";
import { Doughnut, Bar } from "react-chartjs-2";

import Subheader from "./subheader.js";
import { predictTweet } from "../backend/naive_bayes_backend.js";

import FakeTweet from "fake-tweet";
import "fake-tweet/build/index.css";

import "chartjs-plugin-deferred";
import NormalDistribution from "normal-distribution";

class TweetAuthor extends Component {
  state = {
    distribution: null,
    tweet: "",
    doughnutChart: null,
    barChart: null,
    bidenUser: {
      nickname: "JoeBiden",
      name: "Joe Biden",
      avatar:
        "https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_400x400.jpg",
      verified: true,
      locked: false,
    },
    kanyeUser: {
      nickname: "kanyewest",
      name: "ye",
      avatar:
        "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
      verified: true,
      locked: false,
    },
  };

  constructor(props) {
    super(props);
    this.jumbotronRef = React.createRef();
  }

  componentDidMount() {
    this.getAuthor();
  }

  /**
   * Calls the backend to display the tweet info
   */
  getAuthor = () => {
    // initial cleaning
    var tweet = document.getElementById("sentiment-input").value.trim();
    tweet = tweet.replace(/\s\s+/g, " ");
    document.getElementById("sentiment-input").value = tweet;

    // checks the length of the tweet
    if (tweet.length === 0) {
      alert("Please enter a valid message");
      return;
    }

    // call backend
    let authorInfo = predictTweet(tweet);

    console.log(authorInfo);

    // update author
    this.setState({ author: authorInfo.pred_author });

    this.createTweet(tweet, authorInfo.pred_author);

    // create the doughnut chart
    this.createDoughnutChart(authorInfo.likelihood);

    // create the bar chart
    this.createBarChart(authorInfo.words, authorInfo.word_likelihoods);

    if (this.jumbotronRef.current !== null) {
      this.jumbotronRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  /**
   * Creates the bar chart
   * @param {array} words graph labels
   * @param {array} likelihoods graph values
   */
  createBarChart = (words, likelihoods) => {
    this.setState({
      barChart: (
        <Bar
          data={{
            labels: words,
            datasets: [
              {
                label: "Kanye",
                data: likelihoods.map((num) => (num > 0 ? num : 0)),
                backgroundColor: "#e3554b",
              },
              {
                label: "Biden",
                data: likelihoods.map((num) => (num < 0 ? num : 0)),
                backgroundColor: "#4b95db",
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Individual Word Author Breakdown",
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
   * Formats the current time for the tweet
   */
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

  /**
   * Creates the fake tweet
   * @param {string} tweet tweet text
   * @param {Object} authorInfo the info of the author
   */
  createTweet = (tweet, authorInfo) => {
    this.formatTime();
    const config = {
      user:
        authorInfo === "Kanye" ? this.state.kanyeUser : this.state.bidenUser,
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
   * Gets the p-value from the z-score
   * from: https://www.npmjs.com/package/react-canvas-draw
   * @param {double} z the z-score
   */
  calcPValue = (z) => {
    return new NormalDistribution().cdf(z);
  };

  /**
   * Creates a pie chart
   * @param {double} likelihood prediction value
   */
  createDoughnutChart = (likelihood) => {
    let probKanye = this.calcPValue(likelihood);
    this.setState({
      doughnutChart: (
        <Doughnut
          data={{
            datasets: [
              {
                data: [probKanye, 1 - probKanye],
                backgroundColor: ["#e3554b", "#4b95db"],
              },
            ],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: ["Kanye West", "Joe Biden"],
          }}
          options={{
            legend: {
              onClick: null,
            },
            title: {
              display: true,
              text: "Probability Distribution by Author",
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
            defaultValue="Yeezy just built different"
          ></textarea>
        </div>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <button
              style={{ width: 150 }}
              type="button"
              class="btn btn-primary"
              onClick={this.getAuthor}
            >
              Predict Author
            </button>
          </div>
        </div>
        <br></br>
        <br></br>

        <Jumbotron ref={this.jumbotronRef}>
          <h4>
            The model guesses this was written by{" "}
            <span
              style={{
                color: this.state.author === "Biden" ? "#4b95db" : "#e3554b",
              }}
            >
              {this.state.author}
            </span>{" "}
          </h4>
        </Jumbotron>
        <br></br>
        {this.state.tweet}
        <br></br>
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

export default TweetAuthor;
