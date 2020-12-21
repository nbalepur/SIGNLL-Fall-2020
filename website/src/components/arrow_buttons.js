import React, { Component } from "react";

import FadeIn from "react-fade-in";

import BootstrapSwitchButton from "bootstrap-switch-button-react";

import "../arrow-buttons.css";

class ArrowButtons extends Component {
  state = {};

  createButtons = () => {
    let names = this.props.names;
    let stateChanges = this.props.stateChanges;

    let buttons = [];

    for (var name_index = 0; name_index < names.length; name_index++) {
      buttons.push(
        <button
          type="button"
          class="btn btn btn-primary btn-arrow-right"
          style={{
            backgroundColor:
              this.props.currentAnimation === names[name_index]
                ? "#2185c5"
                : "#71bceb",
            borderColor:
              this.props.currentAnimation === names[name_index]
                ? "#2185c5"
                : "#71bceb",
          }}
          onClick={stateChanges[name_index]}
        >
          {names[name_index]}
        </button>
      );
    }

    return buttons;
  };

  render() {
    return (
      <div class="row">
        <div class="col-md-12" align="center" style={{ paddingBottom: "10px" }}>
          <button
            type="button"
            class="btn btn-info btn-sm"
            id="play-animation"
            onClick={() => {
              this.props.setView("animation");
              this.props.playAnimation();
            }}
          >
            Play Animation
          </button>{" "}
          <button
            type="button"
            class="btn btn-info btn-sm"
            id="compare-summary"
            onClick={() => {
              this.props.setView("compare");
            }}
          >
            Compare Summary
          </button>
        </div>
        {this.props.viewType === "animation" && (
          <div class="col-lg-12" align="center">
            <FadeIn>
              <div>{this.createButtons()}</div>
            </FadeIn>
          </div>
        )}
        {this.props.viewType === "compare" && (
          <div class="col-md-12 summary-compare-switch" align="center">
            <FadeIn>
              <BootstrapSwitchButton
                checked={this.props.showWords}
                onlabel="Word Weights"
                offlabel="Sentence Weights"
                width={200}
                onChange={(active) => {
                  this.props.updateShowWords(active);
                }}
              />
            </FadeIn>
          </div>
        )}
      </div>
    );
  }
}

export default ArrowButtons;
