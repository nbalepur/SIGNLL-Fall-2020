import React, { Component } from "react";

import {
  wiki_sentence_sort,
  wiki_sentence_sorted,
} from "../../backend/storage/summarization_storage.js";

import FlipMove from "react-flip-move";

class SortAnimation extends Component {
  state = {
    data: wiki_sentence_sort,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ data: wiki_sentence_sorted });
    }, 2000);
  };

  createKey = (elem) => {
    let keyStr = "";

    for (let keyIndex = 0; keyIndex < 6; keyIndex++) {
      keyStr += elem.props.children[keyIndex].props.children;
    }

    return keyStr;
  };

  render() {
    return (
      <div>
        <FlipMove>
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
