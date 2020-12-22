import React, { Component } from "react";

import FadeIn from "react-fade-in";

import {
  full_text_words,
  summary_text_words,
  full_text_sentences,
  summary_text_sentences,
} from "../backend/storage/summarization_compare_storage.js";

import "../styles.css";

class SummaryCompare extends Component {
  state = {};

  render() {
    return (
      <div class="row">
        <div class="col-xl-6">
          <FadeIn>
            <h4>Full Text</h4>
          </FadeIn>
          {this.props.showWords ? (
            <FadeIn>
              <div class="overflow-auto" style={{ height: 450 }}>
                {full_text_words}
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div class="overflow-auto" style={{ height: 450 }}>
                {full_text_sentences}
              </div>
            </FadeIn>
          )}
        </div>
        <div class="col-xl-6">
          <FadeIn>
            <h4>Summary</h4>
          </FadeIn>
          {this.props.showWords ? (
            <FadeIn>{summary_text_words}</FadeIn>
          ) : (
            <FadeIn>{summary_text_sentences}</FadeIn>
          )}
        </div>
      </div>
    );
  }
}

export default SummaryCompare;
