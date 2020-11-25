import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

import Subheader from "./subheader.js";

import "../styles.css";

class Slides extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    horizontal_offset: 0,
    vertical_offset: 0,
  };

  /**
   * Sets the offset for the slides
   */

  componentDidMount() {
    if (
      this.state.horizontal_offset === 0 &&
      this.state.vertical_offset === 0
    ) {
      this.updateDimensions();
    }
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.updateOffset();
    this.setState({ width: window.innerWidth });
    this.setState({ height: window.innerHeight });
  };

  updateOffset() {
    var element = document.getElementById("slide-container");

    var bodyRect = document.body.getBoundingClientRect();
    var elemRect = element.getBoundingClientRect();

    var horizontal_offset = bodyRect.right - elemRect.right;
    var vertical_offset = elemRect.top - bodyRect.top;

    this.setState({ horizontal_offset: horizontal_offset });
    this.setState({ vertical_offset: vertical_offset + 50 });
  }

  render() {
    return (
      <Container id="slide-container">
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
        <div class="row notebook-switch">
          <div class="col-lg-11"></div>
          <div class="col-lg-1 text-right">
            <Link
              to={"/slides/".concat(this.props.download)}
              target="_blank"
              download
            >
              <button type="button" class="btn btn-info">
                Download
              </button>
            </Link>
          </div>
        </div>
        <iframe
          class="slides"
          src={this.props.source.concat(
            "/embed?start=false&loop=false&delayms=3000"
          )}
          frameborder="0"
          height={window.innerHeight - this.state.vertical_offset}
          width={window.innerWidth - 2 * this.state.horizontal_offset}
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title={this.props.title}
        ></iframe>
      </Container>
    );
  }
}

export default Slides;
