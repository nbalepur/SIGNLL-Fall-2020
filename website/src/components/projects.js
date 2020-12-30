import React, { Component } from "react";
import { Link } from "react-router-dom";

import Intro from "../images/intro.png";
import Regression from "../images/regression.png";
import Sentiment from "../images/sentiment.png";
import NeuralNetwork from "../images/neuralnet.png";
import Chatbot1 from "../images/chatbotp1.png";
import Chatbot2 from "../images/chatbotp2.png";
import Summary from "../images/summary.png";
import Trie from "../images/trie.png";
import NaiveBayes from "../images/naivebayes.png";

import { Container } from "react-bootstrap";

class Projects extends Component {
  state = {
    showDescriptions: true,
  };

  render() {
    return (
      <Container>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Link
                to="/SIGNLL-Fall-2020/intro"
                onClick={() => {
                  this.props.setPage("Intro to Python and Numpy");
                }}
              >
                <img
                  src={Intro}
                  class="d-block w-100"
                  alt="Intro to Python and Numpy"
                />
              </Link>
              {this.state.showDescriptions && (
                <div class="carousel-caption d-none d-md-block carousel-label">
                  <Link
                    to="/SIGNLL-Fall-2020/intro"
                    onClick={() => {
                      this.props.setPage("Intro to Python and Numpy");
                    }}
                  >
                    <h4 style={{ color: "white" }}>
                      Intro to Python and Numpy
                    </h4>
                  </Link>
                  <p>
                    An introduction to the Python language and Numpy library
                  </p>
                </div>
              )}
            </div>
            <div class="carousel-item">
              <Link
                to="/SIGNLL-Fall-2020/regression"
                onClick={() => {
                  this.props.setPage("Linear and Logistic Regression");
                }}
              >
                <img
                  src={Regression}
                  class="d-block w-100"
                  alt="Linear and Logistic Regression"
                />
              </Link>
              {this.state.showDescriptions && (
                <div class="carousel-caption d-none d-md-block carousel-label">
                  <Link
                    to="/SIGNLL-Fall-2020/regression"
                    onClick={() => {
                      this.props.setPage("Linear and Logistic Regression");
                    }}
                  >
                    <h4 style={{ color: "white" }}>
                      Linear and Logistic Regression
                    </h4>
                  </Link>
                  <p>
                    Fundamentals of linear and logistic regression algorithms
                  </p>
                </div>
              )}
            </div>
            <div class="carousel-item">
              <Link
                to="/SIGNLL-Fall-2020/sentiment_analysis"
                onClick={() => {
                  this.props.setPage("Sentiment Analysis");
                }}
              >
                <img
                  src={Sentiment}
                  class="d-block w-100"
                  alt="Sentiment Analysis"
                />
              </Link>
              {this.state.showDescriptions && (
                <div class="carousel-caption d-none d-md-block carousel-label">
                  <Link
                    to="/SIGNLL-Fall-2020/sentiment_analysis"
                    onClick={() => {
                      this.props.setPage("Sentiment Analysis");
                    }}
                  >
                    <h4 style={{ color: "white" }}>
                      Twitter Sentiment Analysis
                    </h4>
                  </Link>
                  <p>Analyzing and predicting the sentiment of tweets</p>
                </div>
              )}
            </div>
            <div class="carousel-item">
              <Link
                to="/SIGNLL-Fall-2020/neural_networks"
                onClick={() => {
                  this.props.setPage("Neural Networks");
                }}
              >
                <img
                  src={NeuralNetwork}
                  class="d-block w-100"
                  alt="Neural Network"
                />
              </Link>
              {this.state.showDescriptions && (
                <div class="carousel-caption d-none d-md-block carousel-label">
                  <Link
                    to="/SIGNLL-Fall-2020/neural_networks"
                    onClick={() => {
                      this.props.setPage("Neural Networks");
                    }}
                  >
                    <h4 style={{ color: "white" }}>Neural Networks</h4>
                  </Link>
                  <p>
                    Application of neural networks to handwritten digit
                    recognition
                  </p>
                </div>
              )}
            </div>
            <div class="carousel-item">
              <Link
                to="/SIGNLL-Fall-2020/chatbot_p1"
                onClick={() => {
                  this.props.setPage("Chatbot Part 1");
                }}
              >
                <img
                  src={Chatbot1}
                  class="d-block w-100"
                  alt="Chatbot Part 1"
                />
              </Link>
              {this.state.showDescriptions && (
                <div class="carousel-caption d-none d-md-block carousel-label">
                  <Link
                    to="/SIGNLL-Fall-2020/chatbot_p1"
                    onClick={() => {
                      this.props.setPage("Chatbot Part 1");
                    }}
                  >
                    <h4 style={{ color: "white" }}>Chatbot Part 1</h4>
                  </Link>
                  <p>Training the model for a customer support chatbot</p>
                </div>
              )}
            </div>
            <div class="carousel-item">
              <Link
                to="/SIGNLL-Fall-2020/chatbot_p2"
                onClick={() => {
                  this.props.setPage("Chatbot Part 2");
                }}
              >
                <img
                  src={Chatbot2}
                  class="d-block w-100"
                  alt="Chatbot Part 2"
                />
              </Link>
              {this.state.showDescriptions && (
                <div class="carousel-caption d-none d-md-block carousel-label">
                  <Link
                    to="/SIGNLL-Fall-2020/chatbot_p2"
                    onClick={() => {
                      this.props.setPage("Chatbot Part 2");
                    }}
                  >
                    <h4 style={{ color: "white" }}>Chatbot Part 2</h4>
                  </Link>
                  <p>Using a pre-trained model to make chatbot predictions</p>
                </div>
              )}
            </div>
            <div class="carousel-item">
              <Link
                to="/SIGNLL-Fall-2020/text_summarization"
                onClick={() => {
                  this.props.setPage("Text Summarization");
                }}
              >
                <img
                  src={Summary}
                  class="d-block w-100"
                  alt="Text Summarization"
                />
              </Link>
              {this.state.showDescriptions && (
                <div class="carousel-caption d-none d-md-block carousel-label">
                  <Link
                    to="/SIGNLL-Fall-2020/text_summarization"
                    onClick={() => {
                      this.props.setPage("Text Summarization");
                    }}
                  >
                    <h4 style={{ color: "white" }}>Text Summarization</h4>
                  </Link>
                  <p>
                    Extracting the most important information from a long piece
                    of text
                  </p>
                </div>
              )}
            </div>
            <div class="carousel-item">
              <Link
                to="/SIGNLL-Fall-2020/tries"
                onClick={() => {
                  this.props.setPage("Tries");
                }}
              >
                <img src={Trie} class="d-block w-100" alt="Tries" />
              </Link>
              {this.state.showDescriptions && (
                <div class="carousel-caption d-none d-md-block carousel-label">
                  <Link
                    to="/SIGNLL-Fall-2020/tries"
                    onClick={() => {
                      this.props.setPage("Tries");
                    }}
                  >
                    <h4 style={{ color: "white" }}>Tries</h4>
                  </Link>
                  <p>
                    Application and uses of storing dictionaries in the trie
                    data structure
                  </p>
                </div>
              )}
            </div>
            <div class="carousel-item">
              <Link
                to="/SIGNLL-Fall-2020/naive_bayes"
                onClick={() => {
                  this.props.setPage("Naive Bayes");
                }}
              >
                <img src={NaiveBayes} class="d-block w-100" alt="Naive Bayes" />
              </Link>
              {this.state.showDescriptions && (
                <div class="carousel-caption d-none d-md-block carousel-label">
                  <Link
                    to="/SIGNLL-Fall-2020/naive_bayes"
                    onClick={() => {
                      this.props.setPage("Naive Bayes");
                    }}
                  >
                    <h4 style={{ color: "white" }}>Naive Bayes</h4>
                  </Link>
                  <p>
                    Combining statistics and NLP to create a twitter
                    de-anonymization model
                  </p>
                </div>
              )}
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </Container>
    );
  }
}

export default Projects;
