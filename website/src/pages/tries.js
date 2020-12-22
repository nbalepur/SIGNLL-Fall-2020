import React, { Component } from "react";

import { Container } from "react-bootstrap";

import Tab from "../components/tabs.js";
import Notebook from "../components/notebook.js";
import Slides from "../components/slides.js";
import WordUnscramble from "../components/word_unscramble.js";

class Tries extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    tabs: [
      {
        name: "Jupyter Notebook",
        component: (
          <Notebook
            notebooks={{
              blank:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/tries-blank/v/1",
              filled:
                "https://jovian.ai/embed?url=https://jovian.ai/nishantbalepur/tries-filled/v/1",
            }}
            download="tries.zip"
            allowSwitch={true}
            title="Tries"
            titleKey="Notebook"
            subtitle="In this notebook, we analyze the efficiency of different data structures for storing a large amount of text, as well as some useful applications of the Trie data structure"
            badges={{
              title: "tries",
              badges: [
                { label: "tries", type: "topic" },
                { label: "data structures", type: "topic" },
                { label: "recursion", type: "topic" },
                { label: "object-oriented programming", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "matplotlib", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Slides",
        component: (
          <Slides
            title="Tries"
            titleKey="Slides"
            subtitle="These slides discuss the theory behind Tries, its benefits and drawbacks, and applications where the data structure would be useful"
            download="tries.pdf"
            source="https://docs.google.com/presentation/d/e/2PACX-1vTafd3uHGTcvhpCJDIf2lQUVz7epSjdkuX1rAV06HTGj3NiTiaHZonXC6CJHojKV9vYL355jR2R2q80"
            badges={{
              title: "tries",
              badges: [
                { label: "tries", type: "topic" },
                { label: "data structures", type: "topic" },
                { label: "recursion", type: "topic" },
                { label: "object-oriented programming", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "matplotlib", type: "language" },
              ],
            }}
          />
        ),
      },
      {
        name: "Word Unscrambler",
        component: (
          <WordUnscramble
            title="Tries"
            titleKey="Word Unscrambler"
            subtitle="In this demo we'll take a look at a very useful application of Tries, recursively unscrambling letters to create valid words"
            badges={{
              title: "tries",
              badges: [
                { label: "tries", type: "topic" },
                { label: "data structures", type: "topic" },
                { label: "recursion", type: "topic" },
                { label: "object-oriented programming", type: "topic" },
                { label: "python", type: "language" },
                { label: "numpy", type: "language" },
                { label: "matplotlib", type: "language" },
              ],
            }}
          />
        ),
      },
    ],
  };

  render() {
    return (
      <Container>
        <br></br>
        <Tab tabs={this.state.tabs} />
      </Container>
    );
  }
}

export default Tries;
