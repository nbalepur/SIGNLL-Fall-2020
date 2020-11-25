import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

import Subheader from "./subheader.js";

import "../styles.css";

class Notebook extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    horizontal_offset: 0,
    vertical_offset: 0,
    notebook_type: "filled",
  };

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
    var element = document.getElementById("notebook-container");

    var bodyRect = document.body.getBoundingClientRect();
    var elemRect = element.getBoundingClientRect();

    var horizontal_offset = bodyRect.right - elemRect.right;
    var vertical_offset = elemRect.top - bodyRect.top;

    this.setState({ horizontal_offset: horizontal_offset });
    this.setState({ vertical_offset: vertical_offset + 25 });
  }

  render() {
    return (
      <Container id="notebook-container">
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
          <div class="col-lg-11">
            {this.props.allowSwitch && (
              <BootstrapSwitchButton
                checked={true}
                onlabel="Filled"
                offlabel="Blank"
                width={100}
                onChange={(active) => {
                  const next = active ? "filled" : "blank";
                  this.setState({ notebook_type: next });
                }}
              />
            )}
          </div>
          <div class="col-lg-1 text-right">
            <Link
              to={"/notebooks/".concat(this.props.download)}
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
          class="notebook"
          src={this.props.notebooks[this.state.notebook_type]}
          title={this.props.title}
          height={this.state.height}
          width={this.state.width - 2 * this.state.horizontal_offset}
          frameborder="0"
          scrolling="auto"
        ></iframe>
      </Container>
    );
  }
}

export default Notebook;
