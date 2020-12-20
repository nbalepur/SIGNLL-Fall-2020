import React, { Component } from "react";

import { wiki_sentence_sort } from "../../backend/storage/summarization_storage.js";

const Sentences = wiki_sentence_sort.map((sentence) => (
  <div>
    {sentence}
    <p></p>
  </div>
));

class SortAnimation extends Component {
  state = {};
  render() {
    return Sentences;
  }
}

export default SortAnimation;
