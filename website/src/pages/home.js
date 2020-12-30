import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Projects from "../components/projects.js";
import Resources from "../components/resources.js";

import Logo from "../images/logo.png";
import "../styles.css";

import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {};
  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <h2>
          About{" "}
          <span class="signll-text" style={{ color: "#2185c5" }}>
            SIGNLL@UIUC
          </span>
        </h2>
        <hr></hr>
        <br></br>
        <div class="row">
          <div class="col col-lg-3">
            <img
              src={Logo}
              class="signll-image"
              alt="logo"
              style={{ width: 260, height: 260 }}
            ></img>
          </div>
          <div class="col col-lg-9">
            <h5>
              <span class="signll-text" style={{ color: "#2185c5" }}>
                SIGNLL@UIUC
              </span>{" "}
              is the special interest group for natural language learning at the
              University of Illinois at Urbana-Champaign and is one of the many
              subgroups of{" "}
              <a
                href="https://acm.illinois.edu"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#2185c5" }}
              >
                ACM
              </a>
            </h5>
            <br></br>
            <h5>
              We are open to all students regardless of background and prior
              experience. Take a look around the website to see demos of
              different projects that we've completed throughout various
              semesters. Some of our NLP popular projects include:{" "}
              <Link
                to="/SIGNLL-Fall-2020/sentiment_analysis"
                onClick={() => {
                  this.props.setPage("Sentiment Analysis");
                }}
              >
                <span style={{ color: "#2185c5" }}>sentiment analysis</span>
              </Link>
              ,{" "}
              <Link
                to="/SIGNLL-Fall-2020/chatbot_p2"
                onClick={() => {
                  this.props.setPage("Chatbot Part 2");
                }}
              >
                <span style={{ color: "#2185c5" }}>chatbots</span>
              </Link>
              ,{" "}
              <Link
                to="/SIGNLL-Fall-2020/text_summarization"
                onClick={() => {
                  this.props.setPage("Text Summarization");
                }}
              >
                <span style={{ color: "#2185c5" }}>summarization</span>
              </Link>
              , and <span style={{ color: "#2185c5" }}>more</span>!
            </h5>
            <br></br>
            <h5>
              Meeting times will soon be announced which are subject to change
              due to COVID-19. If you have any questions, feel free to{" "}
              <a
                href="mailto:balepur2@illinois.edu"
                style={{ color: "#2185c5" }}
              >
                reach out
              </a>
              !
            </h5>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h2>Projects</h2>
        <hr></hr>
        <Projects setPage={this.props.setPage} />
        <br></br>
        <br></br>
        <br></br>
        <h2>Resources / Contact</h2>
        <hr></hr>
        <Resources />
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default Home;
