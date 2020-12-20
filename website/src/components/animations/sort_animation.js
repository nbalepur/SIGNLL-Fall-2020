import React, { Component } from "react";

import { wiki_sentence_sort } from "../../backend/storage/summarization_storage.js";

let key = 0;

const Sentences = wiki_sentence_sort.map((sentence) => (
  <div key={key}>
    {sentence}
    <p></p>
  </div>
));

class SortAnimation extends Component {
  state = {
    data: wiki_sentence_sort,
  };

  componentDidMount() {}

  render() {
    return this.state.data.map((sentence, key) => (
      <div key={key}>
        {sentence}
        <p></p>
      </div>
    ));
  }
}

export default SortAnimation;
