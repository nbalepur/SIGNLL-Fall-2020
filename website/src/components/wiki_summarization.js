import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Subheader from "./subheader.js";
import ArrowButtons from "./arrow_buttons.js";

import LoadAnimation from "./animations/load_animation.js";
import WordWeightAnimation from "./animations/word_weight_animation.js";
import SortAnimation from "./animations/sort_animation.js";

import SummaryCompare from "./summary_compare.js";

class WikiSummary extends Component {
  state = {
    viewType: "",
    currentAnimation: "",
    showWords: true,
  };

  playAnimation = () => {
    setTimeout(() => {
      this.setState({ currentAnimation: "Load Wiki Article" });
    }, 300);

    setTimeout(() => {
      this.setState({ currentAnimation: "Sentence Weights" });
    }, 7500);

    setTimeout(() => {
      this.setState({ currentAnimation: "Sort Sentences" });
    }, 13500);
  };

  setView = (view) => {
    this.setState({ viewType: view });
  };

  updateShowWords = (val) => {
    this.setState({ showWords: val });
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
          setView={this.setView}
          viewType={this.state.viewType}
          updateShowWords={this.updateShowWords}
          showWords={this.state.showWords}
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

        {this.state.viewType === "animation" && (
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
        )}

        {this.state.viewType === "compare" && (
          <SummaryCompare showWords={this.state.showWords} />
        )}

        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default WikiSummary;
