import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Subheader from "./subheader.js";
import ArrowButtons from "./arrow_buttons.js";

import LoadAnimation from "./animations/load_animation.js";
import WordWeightAnimation from "./animations/word_weight_animation.js";

import Delayed from "../Delayed.jsx";

class WikiSummary extends Component {
  state = {
    viewType: "",
    loadArticle: false,
    calcWeights: false,
    removeSentences: false,
    counterState: true,
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
          viewType={this.state.viewType}
          setAritcleLoad={() => {
            this.setState({ viewType: "article" });
          }}
          names={["Load Wiki Article", "Sentence Weights", "Remove Sentences"]}
          stateChanges={[
            () => {
              this.setState({ loadArticle: true });
              this.setState({ calcWeights: false });
              this.setState({ removeSentences: false });
            },
            () => {
              this.setState({ loadArticle: false });
              this.setState({ calcWeights: true });
              this.setState({ removeSentences: false });
            },
            () => {
              this.setState({ loadArticle: false });
              this.setState({ calcWeights: false });
              this.setState({ removeSentences: true });
            },
          ]}
        />

        <hr></hr>

        <div>
          <Delayed waitBeforeShow={500}>
            <div class="row">
              <div class="col-xl-1"></div>
              <div class="col-xl-10">
                <LoadAnimation />
              </div>
              <div class="col-xl-1"></div>
            </div>
          </Delayed>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default WikiSummary;
