import React, { Component } from "react";

import {
  wiki_sentence_unsorted,
  wiki_sentence_sorted,
  summary,
} from "../../backend/storage/summarization_storage.js";

import FlipMove from "react-flip-move";

class SortAnimation extends Component {
  state = {
    data: wiki_sentence_unsorted,
    animationMode: "",
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ data: wiki_sentence_sorted });
      this.setState({ animationMode: "sorted" });
    }, 1000);

    setTimeout(() => {
      this.setState({ data: wiki_sentence_sorted.slice(0, 6) });
      this.setState({ animationMode: "removed" });
    }, 7000);

    setTimeout(() => {
      this.setState({ data: summary });
    }, 10000);
  };

  createKey = (elem) => {
    return elem.props.children.props.children[0].substr(0, 50);
  };

  render() {
    return (
      <div>
        <FlipMove
          staggerDurationBy={
            this.state.animationMode === "sorted"
              ? "100"
              : this.state.animationMode === "removed"
              ? "50"
              : "50"
          }
          duration={
            this.state.animationMode === "sorted"
              ? 600
              : this.state.animationMode === "removed"
              ? 300
              : 500
          }
          leaveAnimation="fade"
        >
          {this.state.data.map((sentence) => (
            <div key={this.createKey(sentence)}>
              {sentence}
              <p></p>
            </div>
          ))}
        </FlipMove>
      </div>
    );
  }
}

export default SortAnimation;
