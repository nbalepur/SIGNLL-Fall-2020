import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Subheader from "./subheader.js";
import ArrowButtons from "./arrow_buttons.js";

import LoadAnimation from "./animations/load_animation.js";
import WordWeightAnimation from "./animations/word_weight_animation.js";
import SortAnimation from "./animations/sort_animation.js";

import Delayed from "../Delayed.jsx";

class WikiSummary extends Component {
  state = {
    viewType: "",
    currentAnimation: "",
  };

  playAnimation = () => {
    setTimeout(() => {
      this.setState({ currentAnimation: "Load Wiki Article" });
    }, 300);

    setTimeout(() => {
      this.setState({ currentAnimation: "Sentence Weights" });
    }, 5500);

    setTimeout(() => {
      this.setState({ currentAnimation: "Sort Sentences" });
    }, 11500);
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

        <ArrowButtons
          currentAnimation={this.state.currentAnimation}
          playAnimation={this.playAnimation}
          names={["Load Wiki Article", "Sentence Weights", "Sort Sentences"]}
          stateChanges={[
            () => {
              this.setState({ currentAnimation: "Load Wiki Article" });
            },
            () => {
              this.setState({ currentAnimation: "Sentence Weights" });
            },
            () => {
              this.setState({ currentAnimation: "Sort Sentences" });
            },
          ]}
        />

        <hr></hr>

        <div class="row">
          <div class="col-xl-1"></div>
          <div class="col-xl-10">
            {this.state.currentAnimation === "Load Wiki Article" ? (
              <LoadAnimation />
            ) : this.state.currentAnimation === "Sentence Weights" ? (
              <WordWeightAnimation />
            ) : this.state.currentAnimation === "Sort Sentences" ? (
              <SortAnimation />
            ) : (
              ""
            )}
          </div>
          <div class="col-xl-1"></div>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default WikiSummary;
