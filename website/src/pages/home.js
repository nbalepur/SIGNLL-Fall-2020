import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Projects from "../components/projects.js";
import Resources from "../components/resources.js";

import Logo from "../images/logo.png";
import "../styles.css";

import Me from "../images/me.jpg";

import Gmail from "../images/gmail.png";
import Linkedin from "../images/linkedin.webp";
import Github from "../images/github.png";

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
        <h2>
          About <span style={{ color: "#2185c5" }}>Me</span> :)
        </h2>
        <hr></hr>

        <div class="row">
          <div class="col-md-4">
            <img class="me-image" src={Me}></img>
          </div>
          <div class="col-md-8">
            <h5>
              <span style={{ color: "#2185c5" }}>Hello</span>!
            </h5>
            <br></br>
            <h5>
              My name is <span style={{ color: "#2185c5" }}>Nishant</span> and I
              am a current student at UIUC majoring in Computer Science, and I
              also <i>hope</i> to major in Statistics and Mathematics. As of
              now, I am the co-chair of SIGNLL with Jack Nash
            </h5>
            <br></br>
            <h5>
              As for a little about me, my current computer science interests
              are in data science and full-stack development. I also enjoy
              graphic design, exercising, hiking, and listening to music in my
              free time
            </h5>
            <br></br>
            <h5>
              If any of this seems interesting, I'd love for you to join our
              RSO! You can find my contact information below:
            </h5>
            <br></br>
            <div class="row">
              <div class="col-sm-4" align="center">
                <a
                  href="mailto:balepur2@illinois.edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="gmail" class="circle-sm" src={Gmail}></img>
                </a>
                <a
                  href="mailto:balepur2@illinois.edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6 style={{ paddingTop: 15, color: "black" }}>Email</h6>
                </a>
              </div>
              <div class="col-sm-4" align="center">
                <a
                  href="https://www.linkedin.com/in/nishant-balepur-a03818107/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="linkedin" class="circle-sm" src={Linkedin}></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/nishant-balepur-a03818107/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6 style={{ paddingTop: 15, color: "black" }}>LinkedIn</h6>
                </a>
              </div>
              <div class="col-sm-4" align="center">
                <a
                  href="https://www.github.com/nbalepur"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="my github" class="circle-sm" src={Github}></img>
                </a>
                <a
                  href="https://www.github.com/nbalepur"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6 style={{ paddingTop: 15, color: "black" }}>GitHub</h6>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default Home;
