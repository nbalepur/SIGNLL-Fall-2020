import React, { Component } from "react";

import { Container, Jumbotron } from "react-bootstrap";

import Subheader from "./subheader.js";

import { predictIntent } from "../backend/chatbot_backend.js";
import { tags } from "../backend/storage/chatbot_storage.js";

import { Bar } from "react-chartjs-2";

class ChatbotTagPredict extends Component {
  state = {
    intent: "",
    barChart: null,
  };

  constructor(props) {
    super(props);
    this.jumbotronRef = React.createRef();
  }

  componentDidMount() {
    this.getIntent();
  }

  getIntent = () => {
    let intentArr = predictIntent(
      document.getElementById("chatbotp1-input").value.trim()
    );

    intentArr.array().then((arr) => {
      let maxIndex = 0;
      for (let tagIndex = 1; tagIndex < arr[0].length; tagIndex++) {
        if (arr[0][tagIndex] > arr[0][maxIndex]) {
          maxIndex = tagIndex;
        }
      }

      this.setState({ intent: tags[maxIndex] });
      this.createBarChart(arr[0], maxIndex);

      if (this.jumbotronRef.current !== null) {
        this.jumbotronRef.current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    });
  };

  createBackgroundColors = (arr, index) => {
    let colors = [];
    for (let itr = 0; itr < arr.length; itr++) {
      colors.push(itr === index ? "#4b95db" : "#e3554b");
    }
    return colors;
  };

  createBarChart = (intentData, intentIndex) => {
    // set bar chart state
    this.setState({
      barChart: (
        <Bar
          width={800}
          height={325}
          data={{
            labels: tags,
            datasets: [
              {
                label: "Probability",
                data: intentData,
                backgroundColor: this.createBackgroundColors(
                  intentData,
                  intentIndex
                ),
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Individual Intent Breakdown",
              fontSize: 25,
            },
            legend: {
              display: false,
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
            Type your chatbot message below!
          </label>
          <textarea
            class="form-control"
            id="chatbotp1-input"
            rows="3"
            defaultValue="What can you do?"
          ></textarea>
        </div>
        <div class="row">
          <div class="col-md-12" align="right">
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.getIntent}
            >
              Predict Intent
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <Jumbotron ref={this.jumbotronRef}>
          <h4>
            Your message intent was predicted to be:{" "}
            <span
              style={{
                color: "#4b95db",
              }}
            >
              {this.state.intent}
            </span>{" "}
          </h4>
        </Jumbotron>
        <br></br>

        {this.state.barChart}

        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default ChatbotTagPredict;
