import React, { Component } from "react";

import { wiki_article_word_color } from "../../backend/storage/summarization_storage.js";

class WordWeightAnimation extends Component {
  state = {
    currentFade: "word",
  };

  componentDidMount() {
    setTimeout(this.setBackgroundFade, 1000);
    setTimeout(this.setSentenceFade, 3000);
  }

  setSentenceFade = () => {
    /* grab all the elements */
    let elements = document.getElementsByClassName("word-weight");

    /* iterate through and set all colors */
    for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
      let element = elements[elementIndex];
      element.style.backgroundColor = element.classList[2];
    }
  };

  setBackgroundFade = () => {
    /* grab all the elements */
    let elements = document.getElementsByClassName("word-weight");

    /* iterate through and set all colors */
    for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
      let element = elements[elementIndex];
      element.style.backgroundColor = element.classList[1];
    }
  };

  render() {
    return <div>{wiki_article_word_color}</div>;
  }
}

export default WordWeightAnimation;
